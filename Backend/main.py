import os
import json
import urllib.request
import urllib.error
from typing import Optional, List, Dict, Any
from fastapi import FastAPI, HTTPException, Body
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
from pydantic import BaseModel, Field

app = FastAPI(
    title="🌱 KISORA API",
    description="Smart Farming Assistant API & Advisory System",
    version="2.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class QueryRequest(BaseModel):
    question: str = Field(..., description="The farmer's question or problem description")
    crop: Optional[str] = Field("general", description="Selected crop (e.g. rice, wheat, cotton, groundnut, vegetables, other)")
    chat_language: Optional[str] = Field("auto", description="Chat language preference: auto, en, hi, gu")
    image: Optional[str] = Field(None, description="Optional base64 image data")

class AdvisoryResponse(BaseModel):
    summary: str
    possible_causes: List[str]
    what_to_check: List[str]
    recommended_steps: List[str]
    safety_note: str
    expert_escalation: Optional[str] = None

class QueryResponse(BaseModel):
    status: str
    question: str
    crop: str
    chat_language: str
    advisory: AdvisoryResponse

AGRICULTURAL_KNOWLEDGE = {
    "yellow": {
        "en": {
            "summary": "Yellowing leaves in crops often indicate nutrient deficiency (such as Nitrogen), over-watering, root damage, or sap-sucking pest infestation.",
            "possible_causes": [
                "Nitrogen or Iron deficiency in the soil",
                "Waterlogging or poor soil drainage causing root suffocation",
                "Sap-sucking pests like aphids, thrips, or jassids",
                "Early stages of fungal root rot or leaf blight"
            ],
            "what_to_check": [
                "Examine whether yellowing starts from older bottom leaves (Nitrogen) or younger top leaves (Iron/Micronutrient).",
                "Check soil moisture levels and ensure drainage channels are clear.",
                "Inspect the undersides of yellow leaves for tiny insects or webbing.",
                "Inspect roots for brown/black rot or foul smell."
            ],
            "recommended_steps": [
                "Ensure proper drainage in the field to eliminate standing water.",
                "Apply recommended dose of balanced NPK or Urea if nitrogen deficiency is suspected.",
                "Spray neem oil (5ml/L) or recommended bio-pesticide if pests are detected.",
                "Avoid over-fertilizing without a recent soil testing report."
            ],
            "safety_note": "Always wear protective gloves and mask when applying agricultural sprays. Follow dosage guidelines strictly.",
            "expert_escalation": "If leaf yellowing spreads rapidly across the entire plot within 48 hours, consult your local Krishi Vigyan Kendra (KVK) or Block Agriculture Officer."
        },
        "hi": {
            "summary": "पत्तियों का पीला पड़ना नाइट्रोजन की कमी, अधिक पानी, जड़ों का नुकसान या रस चूसक कीड़ों का संकेत हो सकता है।",
            "possible_causes": [
                "मिट्टी में नाइट्रोजन या जिंक/लोहे की कमी",
                "खेत में पानी भरने से जड़ों को हवा न मिलना",
                "माहू (अफिड्स), थ्रिप्स या जेसिड जैसे कीड़ों का हमला",
                "फफूंदजन्य रोग या जड़ सड़न"
            ],
            "what_to_check": [
                "देखें कि पीलापन पुरानी (निचली) पत्तियों से शुरू हो रहा है या नई पत्तियों से।",
                "खेत में पानी के निकास की जांच करें।",
                "पत्तियों की निचली सतह पर छोटे कीड़ों को देखें।",
                "जड़ों की जांच करें कि वे काली या सड़ी तो नहीं हैं।"
            ],
            "recommended_steps": [
                "खेत से अतिरिक्त पानी निकालने का तुरंत प्रबंध करें।",
                "नाइट्रोजन की कमी होने पर संतुलित मात्रा में यूरिया का प्रयोग करें।",
                "कीट दिखने पर नीम के तेल (5 मिली/लीटर पानी) का छिड़काव करें।",
                "मिट्टी परीक्षण के आधार पर ही उर्वरक डालें।"
            ],
            "safety_note": "कीटनाशक या उर्वरक का छिड़काव करते समय हमेशा मास्क और दस्ताने पहनें।",
            "expert_escalation": "यदि पीलापन पूरे खेत में तेजी से फैले, तो नजदीकी कृषि विज्ञान केंद्र (KVK) से संपर्क करें।"
        },
        "gu": {
            "summary": "પાંદડા પીળા પડવા એ નાઇટ્રોજનની ઉણપ, વધુ પડતું પાણી, મૂળને નુકસાન અથવા જીવાતનો ઉપદ્રવ દર્શાવે છે.",
            "possible_causes": [
                "જમીનમાં નાઇટ્રોજન અથવા સૂક્ષ્મ તત્વોની ઉણપ",
                "ખેતરમાં પાણી ભરાઈ જવાથી મૂળનો શ્વાસ રૂંધાવો",
                "મોલો-મશી, થ્રિપ્સ જેવી શોષક જીવાતોનો ઉપદ્રવ",
                "મૂળનો સડો અથવા પાનનો સુકારો"
            ],
            "what_to_check": [
                "જુઓ કે પીળાશ જૂના (નીચલા) પાંદડાથી શરૂ થાય છે કે નવા પાંદડાથી.",
                "જમીનમાં ભેજનું પ્રમાણ અને નિતાર વ્યવસ્થા ચકાસો.",
                "પાંદડાની નીચેની બાજુએ નાની જીવાતો ચકાસો.",
                "મૂળ કાળા કે સડેલા છે કે કેમ તે જુઓ."
            ],
            "recommended_steps": [
                "ખેતરમાંથી વધારાના પાણીના નિકાલની વ્યવસ્થા કરો.",
                "જરૂર જણાય તો ભલામણ કરેલ માત્રામાં યુરિયા અથવા ખાતર આપો.",
                "જીવાત જણાય તો લીમડાના તેલનો છંટકાવ કરો.",
                "જમીન ચકાસણી મુજબ જ ખાતરનો ઉપયોગ કરો."
            ],
            "safety_note": "દવાનો છંટકાવ કરતી વખતે માસ્ક અને ગ્લોવ્ઝ અવશ્ય પહેરો.",
            "expert_escalation": "જો પીળાશ ઝડપથી સમગ્ર ખેતરમાં ફેલાય તો નજીકના કૃષિ વિજ્ઞાન કેન્દ્રનો સંપર્ક કરો."
        }
    },
    "pest": {
        "en": {
            "summary": "Pest symptoms like chewed leaves, holes, or sap feeding require systematic identification and integrated pest management (IPM).",
            "possible_causes": [
                "Caterpillar or stem borer attack",
                "Sap-sucking insects (aphids, whiteflies, mites)",
                "Soil-borne pests like cutworms or white grubs"
            ],
            "what_to_check": [
                "Check for visible worms under leaf surfaces or near root zones.",
                "Look for dark insect excrement (frass) or web structures.",
                "Observe if damage occurs mostly at night or during the day."
            ],
            "recommended_steps": [
                "Install pheromone traps or yellow sticky traps in the field.",
                "Remove and burn heavily infested plant parts to halt spread.",
                "Apply recommended botanical sprays (Neem oil 10000 ppm) early in the morning.",
                "Use targeted bio-pesticides like Beauveria bassiana if organic."
            ],
            "safety_note": "Do not spray chemical pesticides during peak pollinator hours (late morning). Use safety attire.",
            "expert_escalation": "Consult an agricultural extension officer if pest population exceeds the Economic Threshold Level (ETL)."
        },
        "hi": {
            "summary": "कटने, छेद या रस चूसने वाले कीटों के लक्षणों के लिए एकीकृत कीट प्रबंधन (IPM) आवश्यक है।",
            "possible_causes": [
                "इल्ली या तना छेदक कीट का प्रकोप",
                "रस चूसक कीट जैसे सफेद मक्खी, माहू या मखमली मकड़ी",
                "जड़ काटने वाले कीट (सफेद ग्रब)"
            ],
            "what_to_check": [
                "पत्तियों के नीचे और तने के पास कीड़ों को खोजें।",
                "कीटों के मल या जाले की उपस्थिति देखें।",
                "जांचें कि नुकसान रात में हो रहा है या दिन में।"
            ],
            "recommended_steps": [
                "खेत में पीले चिपचिपे कार्ड (Yellow Sticky Traps) लगाएं।",
                "प्रभावित पत्तियों और पौधों को हटाकर नष्ट कर दें।",
                "सुबह के समय नीम के तेल का छिड़काव करें।",
                "जैविक नियंत्रण के लिए मित्र कीटों का संरक्षण करें।"
            ],
            "safety_note": "छिड़काव करते समय हवा की दिशा का ध्यान रखें और सुरक्षा किट का उपयोग करें।",
            "expert_escalation": "यदि कीटों की संख्या बहुत अधिक हो तो तुरंत कृषि अधिकारी से सलाह लें।"
        },
        "gu": {
            "summary": "જીવાત દ્વારા પાંદડા ખાવા અથવા કાણાં પાડવાના લક્ષણો માટે સંકલિત જીવાત વ્યવસ્થાપન જરૂરી છે.",
            "possible_causes": [
                "ઈયળ અથવા પ્રકાંડ કોરી ખાનાર જીવાત",
                "સફેદ મખી, મોલો અથવા કથરીનો ઉપદ્રવ",
                "જમીનમાં રહેતી ડોળ અથવા મૂળ ખાનાર જીવાત"
            ],
            "what_to_check": [
                "પાંદડા નીચે અને છોડના ભાગો પર જીવાત ચકાસો.",
                "જીવાતની હગાર અથવા જાળા જુઓ.",
                "નુકસાન દિવસ દરમિયાન થાય છે કે રાત્રે તે જુઓ."
            ],
            "recommended_steps": [
                "ખેતરમાં પીળા પીળા ચીકણા પીંજર (Sticky Traps) લગાવો.",
                "વધારે ઉપદ્રવ વાળા ભાગોને દૂર કરી નાશ કરો.",
                "વહેલી સવારે લીમડા આધારિત દવાઓનો છંટકાવ કરો.",
                "જરૂરિયાત મુજબ યોગ્ય બાયો-પેસ્ટીસાઇડ વાપરો."
            ],
            "safety_note": "દવા છાંટતી વખતે મોં પર રૂમાલ કે માસ્ક બાંધવો.",
            "expert_escalation": "જો જીવાત કાબૂ બહાર જાય તો કૃષિ નિષ્ણાતની સલાહ લો."
        }
    },
    "default": {
        "en": {
            "summary": "General agricultural crop condition assessment for crop care and problem diagnostic.",
            "possible_causes": [
                "Nutrient imbalance or soil acidity/alkalinity issue",
                "Environmental stress (heat, dry spell, over-moisture)",
                "Initial pest or fungal pathogen onset"
            ],
            "what_to_check": [
                "Inspect leaf discoloration, spotting, or curling across representative plants.",
                "Test soil moisture at 2-4 inches depth near crop root zone.",
                "Check weather history of the past 7 days in your block."
            ],
            "recommended_steps": [
                "Maintain consistent field irrigation schedule based on soil moisture.",
                "Apply balanced organic compost or recommended NPK dosages.",
                "Keep field weed-free to prevent harboring pests and diseases.",
                "Conduct a soil test before major fertilizer application."
            ],
            "safety_note": "Follow recommended agricultural practices and use certified seeds and inputs.",
            "expert_escalation": "Contact your district Krishi Bhavan or Agri helpline (1551 / 1800-180-1551) for localized advice."
        },
        "hi": {
            "summary": "फसल स्वास्थ्य और सामान्य देखभाल की व्यावहारिक मार्गदर्शिका।",
            "possible_causes": [
                "मिट्टी में पोषक तत्वों का असंतुलन",
                "मौसम का प्रभाव (अधिक ताप, सुखाड़ या नमी)",
                "कीट या फफूंद का शुरुआती संक्रमण"
            ],
            "what_to_check": [
                "पत्तियों के रंग, धब्बों और मुड़ने के लक्षणों की जांच करें।",
                "जड़ के पास 2-3 इंच गहराई पर मिट्टी की नमी जांचें।",
                "पिछले कुछ दिनों के मौसम में बदलाव पर ध्यान दें।"
            ],
            "recommended_steps": [
                "मिट्टी में नमी के अनुसार ही सिंचाई करें।",
                "संतुलित मात्रा में जैविक खाद या एनपीके (NPK) डालें।",
                "खेत को खरपतवार मुक्त रखें ताकि कीड़े न पनपें।",
                "फसल चक्र अपनाएं।"
            ],
            "safety_note": "प्रमाणित बीज एवं अधिकृत कृषि दुकानों से ही सामग्री खरीदें।",
            "expert_escalation": "अधिक जानकारी के लिए किसान कॉल सेंटर (1800-180-1551) पर संपर्क करें।"
        },
        "gu": {
            "summary": "પાકની સામાન્ય સંભાળ અને સમસ્યા નિવારણ માર્ગદર્શિકા.",
            "possible_causes": [
                "જમીનમાં પોષક તત્વોની અસંતુલનતા",
                "હવામાનની પ્રતિકૂળ અસર (તાપમાન, ભેજ)",
                "શરૂઆતી તબક્કાનો રોગ કે જીવાત"
            ],
            "what_to_check": [
                "છોડના પાંદડા, કળીઓ અને પ્રકાંડનું નિરીક્ષણ કરો.",
                "જમીનમાં યોગ્ય ભેજ છે કે કેમ તે ચકાસો.",
                "ખેતરમાં નીંદણનું પ્રમાણ જુઓ."
            ],
            "recommended_steps": [
                "જરૂરીયાત મુજબ સમયસર પિયત આપો.",
                "સેન્દ્રીય ખાતર અને સમતોલ ખાતરનો ઉપયોગ કરો.",
                "ખેતરને નીંદણ મુક્ત રાખો.",
                "પાક ફેરબદલી પદ્ધતિ અપનાવો."
            ],
            "safety_note": "માત્ર માન્યતા પ્રાપ્ત કૃષિ સેવા કેન્દ્રમાંથી નીપજો ખરીદો.",
            "expert_escalation": "વધુ વિગત માટે કૃષિ કૉલ સેન્ટર (1800-180-1551) નો સંપર્ક કરો."
        }
    }
}

def detect_language(text: str) -> str:
    # Basic script inspection for Hindi / Gujarati / English
    devanagari_count = sum(1 for char in text if '\u0900' <= char <= '\u097F')
    gujarati_count = sum(1 for char in text if '\u0A80' <= char <= '\u0AFF')

    if gujarati_count > 2:
        return "gu"
    elif devanagari_count > 2:
        return "hi"
    return "en"

def generate_gemini_advisory(question: str, crop: str, target_lang: str) -> Optional[Dict[str, Any]]:
    api_key = os.getenv("GEMINI_API_KEY")
    if not api_key:
        return None

    lang_name = "English"
    if target_lang == "hi":
        lang_name = "Hindi (हिन्दी)"
    elif target_lang == "gu":
        lang_name = "Gujarati (ગુજરાતી)"

    prompt = f"""You are KISORA, an expert AI Agricultural Assistant designed specifically for Indian farmers.
The farmer has asked a question about their crop ({crop}).

Question: "{question}"
Target Output Language: {lang_name}

Analyze the problem carefully and return ONLY a valid JSON object matching this exact structure:
{{
  "summary": "A concise, empathetic 1-2 sentence overview of the issue in {lang_name}",
  "possible_causes": ["Cause 1 in {lang_name}", "Cause 2 in {lang_name}", "Cause 3 in {lang_name}"],
  "what_to_check": ["Item to check 1 in {lang_name}", "Item to check 2 in {lang_name}", "Item to check 3 in {lang_name}"],
  "recommended_steps": ["Actionable step 1 in {lang_name}", "Actionable step 2 in {lang_name}", "Actionable step 3 in {lang_name}"],
  "safety_note": "A clear safety reminder about pesticide safety, masks, or official guidelines in {lang_name}",
  "expert_escalation": "When and how to consult a local agriculture officer in {lang_name}"
}}

Do not include markdown code block formatting like ```json. Return raw JSON string only."""

    url = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key={api_key}"
    payload = json.dumps({
        "contents": [{"parts": [{"text": prompt}]}]
    }).encode("utf-8")

    req = urllib.request.Request(url, data=payload, headers={"Content-Type": "application/json"})
    try:
        with urllib.request.urlopen(req, timeout=12) as response:
            res_body = response.read().decode("utf-8")
            data = json.loads(res_body)
            raw_text = data["candidates"][0]["content"]["parts"][0]["text"].strip()
            if raw_text.startswith("```"):
                raw_text = raw_text.split("\n", 1)[-1].rsplit("```", 1)[0].strip()
            parsed = json.loads(raw_text)
            return parsed
    except Exception as e:
        print(f"Gemini API call failed or timed out: {e}")
        return None

def get_fallback_advisory(question: str, crop: str, target_lang: str) -> Dict[str, Any]:
    q_lower = question.lower()
    topic = "default"
    if any(k in q_lower for k in ["yellow", "पील", "પીળ"]):
        topic = "yellow"
    elif any(k in q_lower for k in ["pest", "insect", "worm", "कीड़", "इल्ली", "જીવાત", "ઈયળ"]):
        topic = "pest"

    lang_dict = AGRICULTURAL_KNOWLEDGE.get(topic, AGRICULTURAL_KNOWLEDGE["default"])
    content = lang_dict.get(target_lang, lang_dict["en"])

    # Custom adaptation for crop
    crop_display = crop.capitalize() if crop else "Crop"
    summary = content["summary"].replace("crops", crop_display).replace("फसल", crop_display).replace("પાક", crop_display)

    return {
        "summary": summary,
        "possible_causes": content["possible_causes"],
        "what_to_check": content["what_to_check"],
        "recommended_steps": content["recommended_steps"],
        "safety_note": content["safety_note"],
        "expert_escalation": content["expert_escalation"]
    }

@app.get("/api/health")
def health_check():
    return {
        "status": "online",
        "service": "🌱 KISORA Smart Farming Assistant API",
        "version": "2.0.0"
    }

@app.post("/api/query", response_model=QueryResponse)
def query_advisory(req: QueryRequest = Body(...)):
    if not req.question or not req.question.strip():
        raise HTTPException(status_code=400, detail="Question text cannot be empty.")

    # Language resolution
    target_lang = req.chat_language
    if not target_lang or target_lang == "auto":
        target_lang = detect_language(req.question)

    if target_lang not in ["en", "hi", "gu"]:
        target_lang = "en"

    # Gemini AI Attempt
    gemini_result = generate_gemini_advisory(req.question, req.crop or "general", target_lang)

    if gemini_result and "summary" in gemini_result and "possible_causes" in gemini_result:
        advisory = AdvisoryResponse(
            summary=gemini_result.get("summary", ""),
            possible_causes=gemini_result.get("possible_causes", []),
            what_to_check=gemini_result.get("what_to_check", []),
            recommended_steps=gemini_result.get("recommended_steps", []),
            safety_note=gemini_result.get("safety_note", "Always wear protective gear during sprays."),
            expert_escalation=gemini_result.get("expert_escalation", None)
        )
    else:
        fb = get_fallback_advisory(req.question, req.crop or "general", target_lang)
        advisory = AdvisoryResponse(
            summary=fb["summary"],
            possible_causes=fb["possible_causes"],
            what_to_check=fb["what_to_check"],
            recommended_steps=fb["recommended_steps"],
            safety_note=fb["safety_note"],
            expert_escalation=fb["expert_escalation"]
        )

    return QueryResponse(
        status="success",
        question=req.question,
        crop=req.crop or "general",
        chat_language=target_lang,
        advisory=advisory
    )

# Static files mount
frontend_dir = os.path.join(os.path.dirname(os.path.dirname(__file__)), "Frontend")
if not os.path.exists(frontend_dir):
    os.makedirs(frontend_dir, exist_ok=True)

app.mount("/static", StaticFiles(directory=frontend_dir), name="static")

@app.get("/{full_path:path}")
def serve_frontend(full_path: str):
    target_file = os.path.join(frontend_dir, full_path)
    if full_path and os.path.isfile(target_file):
        return FileResponse(target_file)
    index_file = os.path.join(frontend_dir, "index.html")
    if os.path.isfile(index_file):
        return FileResponse(index_file)
    return {"message": "🌱 KISORA Backend is active. Frontend index.html pending creation."}

/**
 * 🌱 KISORA i18n Localization Engine
 * Supports Website Interface Languages: English ('en'), Hindi ('hi'), Gujarati ('gu')
 */

const translations = {
    en: {
        brandName: "KISORA",
        tagline: "Smart Farming. Simple Answers.",
        taglineSub: "Your Farming Questions, Answered Simply.",
        navHome: "Home",
        navAsk: "Ask KISORA",
        navCrops: "Crop Guide",
        navSchemes: "Farmer Schemes",
        navHistory: "My History",
        navSaved: "Saved Advice",
        navLogin: "Login / Sign Up",
        navDashboard: "Dashboard",
        navProfile: "Profile",
        navSettings: "Settings",
        navLogout: "Logout",
        websiteLangLabel: "🌐 Website Language",

        // Hero
        heroBadge: "🌾 AI-Powered Agriculture",
        heroHeadline: "Your Farming Questions, Answered Simply.",
        heroHeadlineHighlight: "Answered Simply.",
        heroSubheading: "Ask KISORA about crops, pests, diseases, fertilizers, water management and everyday farming problems.",
        heroCtaAsk: "🤖 Ask KISORA →",
        heroCtaCrops: "🌾 Explore Crop Guide",

        // Stats
        statCrops: "5+ Crop Categories",
        statLangs: "3 Interface Languages",
        statAi: "AI Powered Advisory",
        statSupport: "24/7 Digital Assistance",

        // Features
        whyTitle: "Why KISORA?",
        whySub: "An intelligent digital farming companion designed around the real needs of farmers.",
        feat1Title: "🌾 Farmer-Friendly",
        feat1Desc: "Simple interface designed specifically for agricultural users.",
        feat2Title: "🌐 Multilingual",
        feat2Desc: "Website interface and AI conversation support multiple languages seamlessly.",
        feat3Title: "🤖 AI-Powered",
        feat3Desc: "Instant, practical agricultural guidance tailored to your crop conditions.",
        feat4Title: "📷 Multimodal Ready",
        feat4Desc: "Designed for future image-based diagnosis and crop photo analysis.",
        feat5Title: "💡 Actionable",
        feat5Desc: "Focus on practical next steps and check items rather than generic text.",
        feat6Title: "🛡️ Safety-Aware",
        feat6Desc: "Encourages verification, safe chemical usage, and expert consultation.",

        // Ask KISORA
        askTitle: "Ask KISORA",
        askSubtitle: "Tell us about your farming problem. We'll help you understand what to check and what to do next.",
        labelCrop: "🌾 Select Crop",
        labelChatLang: "💬 Response Language",
        labelQuestion: "💬 What is your farming problem?",
        placeholderQuestion: "Example: My rice leaves are turning yellow. What could be the reason?",
        addPhotoBtn: "📷 Add Crop Photo",
        photoComingSoon: "📷 Photo Analysis (Coming Soon)",
        voiceBtn: "🎤 Voice Input",
        voiceListening: "🎤 Listening...",
        quickQuestionsTitle: "Quick Questions:",
        btnQuickYellow: "🍃 Yellow leaves",
        btnQuickPest: "🐛 Pest problem",
        btnQuickWater: "💧 Water problem",
        btnQuickFertilizer: "🌱 Fertilizer advice",
        btnQuickDisease: "🌾 Disease problem",
        btnGetAdvice: "🤖 Get Farming Advice →",
        btnThinking: "🌱 KISORA is thinking...",

        // Thinking steps
        step1: "✓ Understanding your question",
        step2: "✓ Checking crop context",
        step3: "● Preparing agricultural guidance",

        // Response Section
        responseHeader: "🌱 KISORA AI RESPONSE",
        statusGenerated: "✓ Advisory Generated",
        headingYourQuestion: "Your Question",
        headingCauses: "Possible Causes",
        headingChecklist: "What You Should Check",
        headingSteps: "Recommended Steps",
        headingSafety: "Safety Note",
        headingEscalation: "When to Consult an Expert",
        btnListen: "🔊 Listen",
        btnCopy: "📋 Copy",
        btnSave: "❤️ Save Advice",
        btnSaved: "❤️ Saved",
        btnShare: "↗ Share",
        feedbackPrompt: "Was this advice helpful?",
        btnYes: "👍 Yes",
        btnNo: "👎 No",

        // Auth
        loginWelcome: "Welcome Back, Farmer",
        loginSubtitle: "Continue your farming journey with KISORA.",
        labelMobileEmail: "Mobile Number / Email",
        labelPassword: "Password",
        labelRemember: "Remember me",
        forgotPassword: "Forgot password?",
        btnLoginSubmit: "Login →",
        btnGoogle: "Continue with Google",
        dividerOr: "OR",
        newToKisora: "New to KISORA? Create account",

        signupTitle: "Create Your KISORA Account",
        signupSubtitle: "Join thousands of farmers using smart AI assistance.",
        labelFullName: "Full Name",
        labelConfirmPassword: "Confirm Password",
        labelPrefLang: "Preferred Interface Language",
        labelState: "State",
        labelDistrict: "District",
        labelPrimaryCrop: "Primary Crop",
        btnSignupSubmit: "Create Account →",
        alreadyAccount: "Already have an account? Login",

        // Onboarding
        onboardStep1Title: "Choose your website language",
        onboardStep2Title: "Where do you farm?",
        onboardStep3Title: "What do you grow?",
        onboardStep4Title: "You're ready!",
        onboardStep4Desc: "Let's solve your farming problems together with KISORA.",
        btnStartKisora: "Start with KISORA →",
        btnNext: "Next →",
        btnBack: "← Back",

        // Dashboard
        dashGreeting: "Good Morning",
        dashSubtitle: "Here is your agricultural overview and recent activity.",
        statQuestionsAsked: "Questions Asked",
        statSavedAdvice: "Saved Advice",
        statPrimaryCrop: "Primary Crop",
        statPrefLang: "Interface Language",
        recentQuestionsTitle: "Recent Questions",
        savedAdviceTitle: "Saved Advice",
        noRecentQuestions: "You haven't asked KISORA anything yet.",
        noSavedAdvice: "Save useful advice here so you can find it later.",
        btnAskFirst: "Ask Your First Question →",

        // Crop Guide
        cropGuideTitle: "Crop Guide & Advisory",
        cropGuideSubtitle: "Detailed agricultural guidance, stage requirements, pest identification and nutrient management.",
        cropRiceName: "Rice (धान / ડાંગર)",
        cropRiceDesc: "Staple cereal crop. Essential guide for moisture management, stem borer control, and blast disease prevention.",
        cropWheatName: "Wheat (गेहूं / ઘઉં)",
        cropWheatDesc: "Major rabi cereal crop. Guidance on rust diseases, leaf blight, and timely irrigation stages.",
        cropCottonName: "Cotton (कपास / કપાસ)",
        cropCottonDesc: "Major commercial fiber crop. Management of pink bollworm, whitefly, and wilt diseases.",
        cropGroundnutName: "Groundnut (मूंगफली / મગફળી)",
        cropGroundnutDesc: "Important oilseed crop. Focus on tikka leaf spot, stem rot, and pegging moisture needs.",
        cropVegName: "Vegetables (सब्जियां / શાકભાજી)",
        cropVegDesc: "High value horticulture. Pest management for tomato, brinjal, chilli, and cucurbits.",
        btnViewGuide: "View Detailed Guide →",

        // Schemes
        schemesTitle: "Farmer Government Schemes",
        schemesSubtitle: "Explore agricultural subsidies, insurance schemes, and government financial support.",
        schemesNotice: "Note: Scheme information provided is for educational & guidance purposes.",
        searchSchemesPlaceholder: "Search schemes by keyword or benefit...",
        filterStateAll: "All States",
        filterCategoryAll: "All Categories",
        btnCheckEligibility: "Check Eligibility",

        // History & Saved
        historyTitle: "My Farming Questions",
        historySubtitle: "Review your past queries, crop advice, and recommendations.",
        savedTitle: "Saved Advice",
        savedSubtitle: "Access your bookmarked agricultural advisories anytime.",
        emptyHistory: "You haven't asked KISORA anything yet.",
        emptySaved: "You have not saved any advice yet.",

        // Profile & Settings
        profileTitle: "Farmer Profile",
        profileSubtitle: "Manage your personal information and agricultural details.",
        btnEditProfile: "Edit Profile",
        btnChangePass: "Change Password",
        settingsTitle: "Settings & Preferences",
        settingsSubtitle: "Customize your language, appearance, and accessibility options.",
        sectionAppearance: "Appearance",
        themeLight: "Light Mode",
        themeDark: "Dark Mode",
        themeSystem: "System Default",
        sectionAccessibility: "Accessibility",
        accReduceMotion: "Reduce animations",
        accLargeText: "Larger text size",
        accHighContrast: "High contrast mode",

        // Trust & Footer
        trustTitle: "Designed for Farmers' Trust",
        trustText1: "Designed to make agricultural information easier to understand.",
        trustText2: "AI-generated advice should be verified with trusted local agricultural experts when the situation is uncertain.",
        footerNotice: "AI advisory is informational and should not replace professional agricultural advice.",
        footerRights: "All rights reserved. Smart India Hackathon Project."
    },
    hi: {
        brandName: "किसोरा",
        tagline: "स्मार्ट खेती। सरल उत्तर।",
        taglineSub: "आपके खेती के सवालों के सरल और सटीक जवाब।",
        navHome: "मुख्य पृष्ठ",
        navAsk: "किसोरा से पूछें",
        navCrops: "फसल गाइड",
        navSchemes: "सरकारी योजनाएं",
        navHistory: "मेरा इतिहास",
        navSaved: "सहेजे गए सुझाव",
        navLogin: "लॉगिन / साइन अप",
        navDashboard: "डैशबोर्ड",
        navProfile: "प्रोफ़ाइल",
        navSettings: "सेटिंग्स",
        navLogout: "लॉगआउट",
        websiteLangLabel: "🌐 वेबसाइट भाषा",

        // Hero
        heroBadge: "🌾 एआई-संचालित कृषि सलाहकार",
        heroHeadline: "आपके खेती के सवाल, सरल जवाब।",
        heroHeadlineHighlight: "सरल जवाब।",
        heroSubheading: "किसोरा से फसलों, कीटों, बीमारियों, उर्वरकों, जल प्रबंधन और रोजमर्रा की खेती की समस्याओं के बारे में पूछें।",
        heroCtaAsk: "🤖 किसोरा से पूछें →",
        heroCtaCrops: "🌾 फसल गाइड देखें",

        // Stats
        statCrops: "5+ फसल श्रेणियां",
        statLangs: "3 इंटरफ़ेस भाषाएं",
        statAi: "एआई संचालित सलाह",
        statSupport: "24/7 डिजिटल सहायता",

        // Features
        whyTitle: "किसोरा क्यों?",
        whySub: "किसान की वास्तविक जरूरतों को ध्यान में रखकर बनाया गया बुद्धिमत्तापूर्ण साथी।",
        feat1Title: "🌾 किसान-अनुकूल",
        feat1Desc: "कृषि उपयोगकर्ताओं के लिए विशेष रूप से डिज़ाइन किया गया सरल इंटरफ़ेस।",
        feat2Title: "🌐 बहुभाषी",
        feat2Desc: "वेबसाइट इंटरफ़ेस और एआई चैट कई भाषाओं का सहजता से समर्थन करते हैं।",
        feat3Title: "🤖 एआई-संचालित",
        feat3Desc: "आपकी फसल की स्थिति के अनुसार तुरंत और व्यावहारिक कृषि सलाह।",
        feat4Title: "📷 फोटो जांच तैयार",
        feat4Desc: "भविष्य की फोटो-आधारित फसल बीमारी पहचान के लिए तैयार।",
        feat5Title: "💡 व्यावहारिक",
        feat5Desc: "सामान्य उत्तरों के बजाय व्यावहारिक कदम और जांच बिंदुओं पर ध्यान।",
        feat6Title: "🛡️ सुरक्षा-जागरूक",
        feat6Desc: "रसायनों के सुरक्षित उपयोग और विशेषज्ञों की सलाह को बढ़ावा देता है।",

        // Ask KISORA
        askTitle: "किसोरा से पूछें",
        askSubtitle: "अपनी फसल की समस्या बताएं। हम आपको समझने में मदद करेंगे कि क्या जांचना है और आगे क्या करना है।",
        labelCrop: "🌾 फसल चुनें",
        labelChatLang: "💬 उत्तर की भाषा",
        labelQuestion: "💬 आपकी खेती की समस्या क्या है?",
        placeholderQuestion: "उदाहरण: मेरे धान के पत्ते पीले हो रहे हैं। इसका क्या कारण हो सकता है?",
        addPhotoBtn: "📷 फसल की फोटो जोड़ें",
        photoComingSoon: "📷 फोटो विश्लेषण (शीघ्र उपलब्ध)",
        voiceBtn: "🎤 बोलकर पूछें",
        voiceListening: "🎤 सुन रहे हैं...",
        quickQuestionsTitle: "त्वरित प्रश्न:",
        btnQuickYellow: "🍃 पीले पत्ते",
        btnQuickPest: "🐛 कीड़ों की समस्या",
        btnQuickWater: "💧 पानी की समस्या",
        btnQuickFertilizer: "🌱 खाद/उर्वरक सलाह",
        btnQuickDisease: "🌾 बीमारी की समस्या",
        btnGetAdvice: "🤖 कृषि सलाह प्राप्त करें →",
        btnThinking: "🌱 किसोरा सोच रहा है...",

        // Thinking steps
        step1: "✓ आपके प्रश्न को समझा जा रहा है",
        step2: "✓ फसल की स्थिति की जांच हो रही है",
        step3: "● कृषि सलाह तैयार की जा रही है",

        // Response Section
        responseHeader: "🌱 किसोरा एआई सलाह",
        statusGenerated: "✓ सलाह तैयार है",
        headingYourQuestion: "आपका प्रश्न",
        headingCauses: "संभावित कारण",
        headingChecklist: "आपको क्या जांचना चाहिए",
        headingSteps: "अनुशंसित कदम",
        headingSafety: "सुरक्षा चेतावनी",
        headingEscalation: "विशेषज्ञ से कब संपर्क करें",
        btnListen: "🔊 सुनें",
        btnCopy: "📋 कॉपी करें",
        btnSave: "❤️ सलाह सहेजें",
        btnSaved: "❤️ सहेजा गया",
        btnShare: "↗ शेयर करें",
        feedbackPrompt: "क्या यह सलाह उपयोगी थी?",
        btnYes: "👍 हां",
        btnNo: "👎 नहीं",

        // Auth
        loginWelcome: "वापसी पर स्वागत है, किसान भाई",
        loginSubtitle: "किसोरा के साथ अपनी कृषि यात्रा जारी रखें।",
        labelMobileEmail: "मोबाइल नंबर / ईमेल",
        labelPassword: "पासवर्ड",
        labelRemember: "मुझे याद रखें",
        forgotPassword: "पासवर्ड भूल गए?",
        btnLoginSubmit: "लॉगिन करें →",
        btnGoogle: "गूगल के साथ जारी रखें",
        dividerOr: "या",
        newToKisora: "किसोरा पर नए हैं? नया खाता बनाएं",

        signupTitle: "अपना किसोरा खाता बनाएं",
        signupSubtitle: "स्मार्ट एआई सहायता का उपयोग करने वाले हजारों किसानों से जुड़ें।",
        labelFullName: "पूरा नाम",
        labelConfirmPassword: "पासवर्ड की पुष्टि करें",
        labelPrefLang: "पंसदीदा वेबसाइट भाषा",
        labelState: "राज्य",
        labelDistrict: "ज़िला",
        labelPrimaryCrop: "मुख्य फसल",
        btnSignupSubmit: "खाता बनाएं →",
        alreadyAccount: "पहले से खाता है? लॉगिन करें",

        // Onboarding
        onboardStep1Title: "अपनी वेबसाइट भाषा चुनें",
        onboardStep2Title: "आप कहां खेती करते हैं?",
        onboardStep3Title: "आप क्या उगाते हैं?",
        onboardStep4Title: "आप तैयार हैं!",
        onboardStep4Desc: "आइए किसोरा के साथ मिलकर आपकी खेती की समस्याओं को हल करें।",
        btnStartKisora: "किसोरा शुरू करें →",
        btnNext: "आगे बढ़ें →",
        btnBack: "← पीछे",

        // Dashboard
        dashGreeting: "शुभ प्रभात",
        dashSubtitle: "यहाँ आपका कृषि विवरण और हाल की गतिविधियां हैं।",
        statQuestionsAsked: "पूछे गए प्रश्न",
        statSavedAdvice: "सहेजी गई सलाह",
        statPrimaryCrop: "मुख्य फसल",
        statPrefLang: "वेबसाइट भाषा",
        recentQuestionsTitle: "हाल के प्रश्न",
        savedAdviceTitle: "सहेजे गए सुझाव",
        noRecentQuestions: "आपने अभी तक किसोरा से कुछ नहीं पूछा है।",
        noSavedAdvice: "उपयोगी सलाह यहाँ सहेजें ताकि बाद में पा सकें।",
        btnAskFirst: "अपना पहला प्रश्न पूछें →",

        // Crop Guide
        cropGuideTitle: "फसल गाइड एवं सलाह",
        cropGuideSubtitle: "विस्तृत कृषि मार्गदर्शन, विकास के चरण, कीट पहचान और पोषक तत्व प्रबंधन।",
        cropRiceName: "धान / चावल (Rice)",
        cropRiceDesc: "मुख्य खाद्यान्न फसल। नमी प्रबंधन, तना छेदक नियंत्रण और झुलसा रोग से बचाव के लिए गाइड।",
        cropWheatName: "गेहूं (Wheat)",
        cropWheatDesc: "प्रमुख रबी फसल। रतुआ (रस्ट) रोग, पत्ती धब्बा और समय पर सिंचाई के चरणों पर मार्गदर्शन।",
        cropCottonName: "कपास (Cotton)",
        cropCottonDesc: "प्रमुख नकदी फसल। गुलाबी सुंडी, सफेद मक्खी और उकठा रोग का नियंत्रण।",
        cropGroundnutName: "मूंगफली (Groundnut)",
        cropGroundnutDesc: "महत्वपूर्ण तिलहन फसल। टिक्का रोग, तना सड़न और सुइयां बनते समय नमी की जरूरत।",
        cropVegName: "सब्जियां (Vegetables)",
        cropVegDesc: "टमाटर, बैंगन, मिर्च और कद्दू वर्गीय फसलों में कीट एवं बीमारी प्रबंधन।",
        btnViewGuide: "विस्तृत गाइड देखें →",

        // Schemes
        schemesTitle: "किसान सरकारी योजनाएं",
        schemesSubtitle: "कृषि सब्सिडी, फसल बीमा योजनाओं और वित्तीय सहायता की जानकारी।",
        schemesNotice: "नोट: योजनाओं की जानकारी केवल मार्गदर्शन और जागरूकता के लिए दी गई है।",
        searchSchemesPlaceholder: "कीवर्ड या लाभ से योजनाएं खोजें...",
        filterStateAll: "सभी राज्य",
        filterCategoryAll: "सभी श्रेणियां",
        btnCheckEligibility: "पात्रता जांचें",

        // History & Saved
        historyTitle: "मेरे खेती के प्रश्न",
        historySubtitle: "अपने पिछले प्रश्नों और एआई सलाह की समीक्षा करें।",
        savedTitle: "सहेजे गए सुझाव",
        savedSubtitle: "अपनी बुकमार्क की गई कृषि सलाह किसी भी समय देखें।",
        emptyHistory: "आपने अभी तक किसोरा से कोई प्रश्न नहीं पूछा है।",
        emptySaved: "आपने अभी तक कोई सलाह नहीं सहेजी है।",

        // Profile & Settings
        profileTitle: "किसान प्रोफ़ाइल",
        profileSubtitle: "अपनी व्यक्तिगत जानकारी और खेती के विवरण का प्रबंधन करें।",
        btnEditProfile: "प्रोफ़ाइल बदलें",
        btnChangePass: "पासवर्ड बदलें",
        settingsTitle: "सेटिंग्स और प्राथमिकताएं",
        settingsSubtitle: "अपनी भाषा, उपस्थिति और पहुंच विकल्पों को अनुकूलित करें।",
        sectionAppearance: "रंग और थीम",
        themeLight: "लाइट मोड",
        themeDark: "डार्क मोड",
        themeSystem: "सिस्टम डिफॉल्ट",
        sectionAccessibility: "पहुंच-योग्यता (Accessibility)",
        accReduceMotion: "कम एनीमेशन",
        accLargeText: "बड़ा टेक्स्ट आकार",
        accHighContrast: "उच्च कंट्रास्ट मोड",

        // Trust & Footer
        trustTitle: "किसानों के भरोसे के लिए निर्मित",
        trustText1: "कृषि जानकारी को आसान और समझने योग्य बनाने के लिए बनाया गया है।",
        trustText2: "स्थिति अनिश्चित होने पर एआई सलाह की पुष्टि स्थानीय कृषि अधिकारियों से अवश्य करें।",
        footerNotice: "एआई सलाह केवल सूचनात्मक है और इसे पेशेवर कृषि सलाह का स्थान नहीं लेना चाहिए।",
        footerRights: "सर्वाधिकार सुरक्षित। स्मार्ट इंडिया हैकाथॉन प्रोजेक्ट।"
    },
    gu: {
        brandName: "કિસોરા",
        tagline: "સ્માર્ટ ખેતી. સરળ જવાબો.",
        taglineSub: "તમારા ખેતીના પ્રશ્નો, સરળ જવાબો.",
        navHome: "મુખ્ય પૃષ્ઠ",
        navAsk: "કિસોરાને પૂછો",
        navCrops: "પાક માર્ગદર્શિકા",
        navSchemes: "સરકારી યોજનાઓ",
        navHistory: "મારો ઈતિહાસ",
        navSaved: "સાચવેલ સલાહ",
        navLogin: "લૉગિન / સાઇન અપ",
        navDashboard: "ડેશબોર્ડ",
        navProfile: "પ્રોફાઇલ",
        navSettings: "સેટિંગ્સ",
        navLogout: "લૉગ આઉટ",
        websiteLangLabel: "🌐 વેબસાઇટ ભાષા",

        // Hero
        heroBadge: "🌾 AI-સંચાલિત કૃષિ સલાહકાર",
        heroHeadline: "તમારા ખેતીના પ્રશ્નો, સરળ જવાબો.",
        heroHeadlineHighlight: "સરળ જવાબો.",
        heroSubheading: "પાક, જીવાત, રોગો, ખાતર, પાણી વ્યવસ્થાપન અને રોજિંદી ખેતીની સમસ્યાઓ વિશે કિસોરાને પૂછો.",
        heroCtaAsk: "🤖 કિસોરાને પૂછો →",
        heroCtaCrops: "🌾 પાક માર્ગદર્શિકા જુઓ",

        // Stats
        statCrops: "5+ પાક શ્રેણીઓ",
        statLangs: "3 વેબસાઇટ ભાષાઓ",
        statAi: "AI આધારિત સલાહ",
        statSupport: "24/7 ડિજિટલ સહાય",

        // Features
        whyTitle: "શા માટે કિસોરા?",
        whySub: "ખેડૂતોની સાચી જરૂરિયાતોને ધ્યાનમાં રાખીને બનાવેલ બુદ્ધિશાળી સાથી.",
        feat1Title: "🌾 ખેડૂત-અનુકૂળ",
        feat1Desc: "ખેડૂતો માટે ખાસ ડિઝાઇન કરેલું સરળ ઇન્ટરફેસ.",
        feat2Title: "🌐 બહુભાષી",
        feat2Desc: "વેબસાઇટ ઇન્ટરફેસ અને AI ચેટ સરળતાથી વિવિધ ભાષાઓને સપોર્ટ કરે છે.",
        feat3Title: "🤖 AI-સંચાલિત",
        feat3Desc: "તમારા પાકની સ્થિતિ મુજબ ત્વરિત અને વ્યવહારુ કૃષિ માર્ગદર્શન.",
        feat4Title: "📷 ફોટો ચકાસણી સક્ષમ",
        feat4Desc: "ભવિષ્યની ફોટો આધારિત પાક રોગ ઓળખ માટે સજ્જ.",
        feat5Title: "💡 વ્યવહારુ પગલાં",
        feat5Desc: "સામાન્ય લખાણને બદલે વ્યવહારુ પગલાં અને ચકાસણી પર ધ્યાન.",
        feat6Title: "🛡️ સુરક્ષા-જાગૃત",
        feat6Desc: "જંતુનાશકોના સુરક્ષિત ઉપયોગ અને નિષ્ણાતોની સલાહને પ્રોત્સાહન આપે છે.",

        // Ask KISORA
        askTitle: "કિસોરાને પૂછો",
        askSubtitle: "તમારા પાકની સમસ્યા જણાવો. અમે તમને શું ચકાસવું અને આગળ શું કરવું તે સમજવામાં મદદ કરીશું.",
        labelCrop: "🌾 પાક પસંદ કરો",
        labelChatLang: "💬 જવાબની ભાષા",
        labelQuestion: "💬 તમારી ખેતીની સમસ્યા શું છે?",
        placeholderQuestion: "ઉદાહરણ: મારા ડાંગરના પાન પીળા થઈ રહ્યા છે. તેનું શું કારણ હોઈ શકે?",
        addPhotoBtn: "📷 પાકની ફોટો ઉમેરો",
        photoComingSoon: "📷 ફોટો પૃથ્થકરણ (ટૂંક સમયમાં)",
        voiceBtn: "🎤 બોલીને પૂછો",
        voiceListening: "🎤 સાંભળી રહ્યા છીએ...",
        quickQuestionsTitle: "ઝડપી પ્રશ્નો:",
        btnQuickYellow: "🍃 પીળા પાંદડા",
        btnQuickPest: "🐛 જીવાતની સમસ્યા",
        btnQuickWater: "💧 પાણીની સમસ્યા",
        btnQuickFertilizer: "🌱 ખાતરની સલાહ",
        btnQuickDisease: "🌾 રોગની સમસ્યા",
        btnGetAdvice: "🤖 કૃષિ સલાહ મેળવો →",
        btnThinking: "🌱 કિસોરા વિચારી રહ્યું છે...",

        // Thinking steps
        step1: "✓ તમારો પ્રશ્ન સમજી રહ્યા છીએ",
        step2: "✓ પાકની સ્થિતિ ચકાસી રહ્યા છીએ",
        step3: "● કૃષિ સલાહ તૈયાર થઈ રહી છે",

        // Response Section
        responseHeader: "🌱 કિસોરા AI સલાહ",
        statusGenerated: "✓ સલાહ તૈયાર છે",
        headingYourQuestion: "તમારો પ્રશ્ન",
        headingCauses: "સંભવિત કારણો",
        headingChecklist: "તમારે શું ચકાસવું જોઈએ",
        headingSteps: "ભલામણ કરેલ પગલાં",
        headingSafety: "સુરક્ષા નોંધ",
        headingEscalation: "નિષ્ણાતની સલાહ ક્યારે લેવી",
        btnListen: "🔊 સાંભળો",
        btnCopy: "📋 કોપી કરો",
        btnSave: "❤️ સલાહ સાચવો",
        btnSaved: "❤️ સાચવેલ છે",
        btnShare: "↗ શેર કરો",
        feedbackPrompt: "શું આ સલાહ ઉપયોગી હતી?",
        btnYes: "👍 હા",
        btnNo: "👎 ના",

        // Auth
        loginWelcome: "પુનઃ સ્વાગત છે, ખેડૂત મિત્ર",
        loginSubtitle: "કિસોરા સાથે તમારી ખેતીની સફર ચાલુ રાખો.",
        labelMobileEmail: "મોબાઈલ નંબર / ઈમેલ",
        labelPassword: "પાસવર્ડ",
        labelRemember: "મને યાદ રાખો",
        forgotPassword: "પાસવર્ડ ભૂલી ગયા?",
        btnLoginSubmit: "લૉગિન કરો →",
        btnGoogle: "Google સાથે આગળ વધો",
        dividerOr: "અથવા",
        newToKisora: "કિસોરા પર નવા છો? નવું ખાતું બનાવો",

        signupTitle: "તમારું કિસોરા ખાતું બનાવો",
        signupSubtitle: "સ્માર્ટ AI સહાયનો ઉપયોગ કરતા હજારો ખેડૂતો સાથે જોડાઓ.",
        labelFullName: "પૂરું નામ",
        labelConfirmPassword: "પાસવર્ડની ખાતરી કરો",
        labelPrefLang: "પસંદગીની વેબસાઇટ ભાષા",
        labelState: "રાજ્ય",
        labelDistrict: "જિલ્લો",
        labelPrimaryCrop: "મુખ્ય પાક",
        btnSignupSubmit: "ખાતું બનાવો →",
        alreadyAccount: "પહેલેથી ખાતું છે? લૉગિન કરો",

        // Onboarding
        onboardStep1Title: "તમારી વેબસાઇટ ભાષા પસંદ કરો",
        onboardStep2Title: "તમે ક્યાં ખેતી કરો છો?",
        onboardStep3Title: "તમે શું વાવો છો?",
        onboardStep4Title: "તમે તૈયાર છો!",
        onboardStep4Desc: "ચાલો કિસોરા સાથે મળીને તમારી ખેતીની સમસ્યાઓનો ઉકેલ લાવીએ.",
        btnStartKisora: "કિસોરા શરૂ કરો →",
        btnNext: "આગળ વધો →",
        btnBack: "← પાછળ",

        // Dashboard
        dashGreeting: "શુભ પ્રભાત",
        dashSubtitle: "અહીં તમારી કૃષિ માહિતી અને તાજેતરની પ્રવૃત્તિઓ છે.",
        statQuestionsAsked: "પૂછાયેલા પ્રશ્નો",
        statSavedAdvice: "સાચવેલ સલાહ",
        statPrimaryCrop: "મુખ્ય પાક",
        statPrefLang: "વેબસાઇટ ભાષા",
        recentQuestionsTitle: "તાજેતરના પ્રશ્નો",
        savedAdviceTitle: "સાચવેલ સલાહ",
        noRecentQuestions: "તમે હજુ સુધી કિસોરાને કંઈ પૂછ્યું નથી.",
        noSavedAdvice: "ઉપયોગી સલાહ અહીં સાચવો જેથી પછીથી મળી શકે.",
        btnAskFirst: "તમારો પહેલો પ્રશ્ન પૂછો →",

        // Crop Guide
        cropGuideTitle: "પાક માર્ગદર્શિકા અને સલાહ",
        cropGuideSubtitle: "વિગતવાર કૃષિ માર્ગદર્શન, વિકાસના તબક્કા, જીવાત ઓળખ અને પોષક તત્વોનું વ્યવસ્થાપન.",
        cropRiceName: "ડાંગર / ચોખા (Rice)",
        cropRiceDesc: "મુખ્ય ધાન્ય પાક. ભેજ વ્યવસ્થાપન, ગાભમારાની ઇયળ અને સુકારાના રોગ સામે રક્ષણ માર્ગદર્શિકા.",
        cropWheatName: "ઘઉં (Wheat)",
        cropWheatDesc: "મુખ્ય રવિ પાક. ગેરુનો રોગ, પાનનો સુકારો અને સમયસર પિયત તબક્કા.",
        cropCottonName: "કપાસ (Cotton)",
        cropCottonDesc: "મુખ્ય રોકડિયો પાક. ગુલાબી ઇયળ, સફેદ મખી અને સુકારાનું નિયંત્રણ.",
        cropGroundnutName: "મગફળી (Groundnut)",
        cropGroundnutDesc: "મહત્વનો તેલીબિયાં પાક. ટપકાંનો રોગ, પ્રકાંડનો સડો અને સોયા બેસતી વખતે ભેજ.",
        cropVegName: "શાકભાજી (Vegetables)",
        cropVegDesc: "રીંગણ, ટામેટા, મરચાં અને શાકભાજી પાકોમાં જીવાત અને રોગ નિયંત્રણ.",
        btnViewGuide: "વિગતવાર માર્ગદર્શિકા જુઓ →",

        // Schemes
        schemesTitle: "ખેડૂત સરકારી યોજનાઓ",
        schemesSubtitle: "કૃષિ સબસિડી, પાક વીમા યોજનાઓ અને નાણાકીય સહાય.",
        schemesNotice: "નોંધ: યોજનાઓની માહિતી માત્ર માર્ગદર્શન અને જાગૃતિ માટે છે.",
        searchSchemesPlaceholder: "કીવર્ડ અથવા લાભ દ્વારા યોજના શોધો...",
        filterStateAll: "તમામ રાજ્યો",
        filterCategoryAll: "તમામ શ્રેણીઓ",
        btnCheckEligibility: "પાત્રતા ચકાસો",

        // History & Saved
        historyTitle: "મારા ખેતીના પ્રશ્નો",
        historySubtitle: "તમારા અગાઉના પ્રશ્નો અને સલાહની સમીક્ષા કરો.",
        savedTitle: "સાચવેલ સલાહ",
        savedSubtitle: "તમારી બુકમાર્ક કરેલી સલાહ ગમે ત્યારે જુઓ.",
        emptyHistory: "તમે હજુ સુધી કિસોરાને કોઈ પ્રશ્ન પૂછ્યો નથી.",
        emptySaved: "તમે હજુ સુધી કોઈ સલાહ સાચવી નથી.",

        // Profile & Settings
        profileTitle: "ખેડૂત પ્રોફાઇલ",
        profileSubtitle: "તમારી અંગત માહિતી અને ખેતીની વિગતો સંચાલિત કરો.",
        btnEditProfile: "પ્રોફાઇલ બદલો",
        btnChangePass: "પાસવર્ડ બદલો",
        settingsTitle: "સેટિંગ્સ અને પસંદગીઓ",
        settingsSubtitle: "તમારી ભાષા, દેખાવ અને એક્સેસિબિલિટી વિકલ્પો સેટ કરો.",
        sectionAppearance: "દેખાવ અને થીમ",
        themeLight: "લાઇટ મોડ",
        themeDark: "ડાર્ક મોડ",
        themeSystem: "સિસ્ટમ ડિફોલ્ટ",
        sectionAccessibility: "એક્સેસિબિલિટી",
        accReduceMotion: "ઓછું એનિમેશન",
        accLargeText: "મોટા અક્ષરો",
        accHighContrast: "હાઇ કોન્ટ્રાસ્ટ મોડ",

        // Trust & Footer
        trustTitle: "ખેડૂતોના વિશ્વાસ માટે નિર્મિત",
        trustText1: "ખેતીની માહિતી સરળ અને સમજી શકાય તેવી બનાવવા માટે બનાવવામાં આવેલ છે.",
        trustText2: "સ્થિતિ અનિશ્ચિત હોય ત્યારે AI સલાહની ચકાસણી સ્થાનિક કૃષિ અધિકારીઓ પાસે અવશ્ય કરાવો.",
        footerNotice: "AI સલાહ માત્ર માહિતી માટે છે અને તે વ્યાવસાયિક કૃષિ સલાહનું સ્થાન લઈ શકતી નથી.",
        footerRights: "તમામ હકો અનામત. સ્માર્ટ ઇન્ડિયા હેકાથોન પ્રોજેક્ટ."
    }
};

class I18nEngine {
    constructor() {
        this.currentLang = localStorage.getItem('kisora_website_lang') || 'en';
    }

    getLang() {
        return this.currentLang;
    }

    setLang(lang) {
        if (!translations[lang]) return;
        this.currentLang = lang;
        localStorage.setItem('kisora_website_lang', lang);
        this.updateUI();
        window.dispatchEvent(new CustomEvent('kisoraLanguageChanged', { detail: { lang } }));
    }

    t(key) {
        return translations[this.currentLang]?.[key] || translations['en']?.[key] || key;
    }

    updateUI() {
        document.documentElement.lang = this.currentLang;
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(el => {
            const key = el.getAttribute('data-i18n');
            const translation = this.t(key);
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                if (el.hasAttribute('placeholder')) {
                    el.placeholder = translation;
                }
            } else {
                el.innerText = translation;
            }
        });

        // Update active language option dropdown if available
        const select = document.getElementById('websiteLangSelect');
        if (select) {
            select.value = this.currentLang;
        }
    }
}

const i18n = new I18nEngine();
document.addEventListener('DOMContentLoaded', () => {
    i18n.updateUI();
});

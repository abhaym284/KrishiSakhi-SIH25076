from fastapi import FastAPI

app = FastAPI(
    title="KrishiSakhi API",
    description="AI-Based Farmer Query Support and Advisory System",
    version="1.0.0"
)


@app.get("/")
def home():
    return {
        "message": "KrishiSakhi API is running!",
        "status": "success"
    }
/**
 * 🌱 KISORA API Service
 * Centralized API calls for query advisory and backend communications.
 */

class ApiService {
    constructor() {
        this.baseUrl = window.location.origin;
    }

    async askKisora({ question, crop = 'general', chatLanguage = 'auto', image = null }) {
        try {
            const response = await fetch(`${this.baseUrl}/api/query`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    question,
                    crop,
                    chat_language: chatLanguage,
                    image
                })
            });

            if (!response.ok) {
                const errorData = await response.json().catch(() => ({}));
                throw new Error(errorData.detail || 'Failed to connect to KISORA AI service.');
            }

            return await response.json();
        } catch (error) {
            console.error('API Error:', error);
            throw error;
        }
    }

    async checkHealth() {
        try {
            const response = await fetch(`${this.baseUrl}/api/health`);
            return await response.json();
        } catch (error) {
            return { status: 'offline' };
        }
    }
}

const apiService = new ApiService();

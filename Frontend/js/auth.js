/**
 * 🌱 KISORA Authentication & User Data Service
 * Client-side session and local persistence architecture prepared for FastAPI Auth integration.
 */

class AuthService {
    constructor() {
        this.currentUserKey = 'kisora_current_user';
        this.historyKey = 'kisora_user_history';
        this.savedAdviceKey = 'kisora_saved_advice';
    }

    getUser() {
        const userJson = localStorage.getItem(this.currentUserKey);
        if (!userJson) {
            // Default demo user if authenticated state simulates login
            return null;
        }
        try {
            return JSON.parse(userJson);
        } catch (e) {
            return null;
        }
    }

    isLoggedIn() {
        return !!this.getUser();
    }

    login(identifier, password, remember = true) {
        // Validation logic
        if (!identifier || !password) {
            throw new Error('Please enter both mobile/email and password.');
        }

        const user = {
            id: 'usr_' + Date.now(),
            name: identifier.includes('@') ? identifier.split('@')[0] : 'Farmer Friend',
            identifier: identifier,
            state: 'Gujarat',
            district: 'Anand',
            primaryCrop: 'Rice',
            websiteLanguage: localStorage.getItem('kisora_website_lang') || 'en',
            token: 'mock_jwt_token_' + Date.now()
        };

        if (remember) {
            localStorage.setItem(this.currentUserKey, JSON.stringify(user));
        } else {
            sessionStorage.setItem(this.currentUserKey, JSON.stringify(user));
        }

        return user;
    }

    signup(userData) {
        if (!userData.fullName || !userData.identifier || !userData.password) {
            throw new Error('Please fill in all required fields.');
        }
        if (userData.password !== userData.confirmPassword) {
            throw new Error('Passwords do not match.');
        }

        const user = {
            id: 'usr_' + Date.now(),
            name: userData.fullName,
            identifier: userData.identifier,
            state: userData.state || 'Gujarat',
            district: userData.district || 'Anand',
            primaryCrop: userData.primaryCrop || 'Rice',
            websiteLanguage: userData.websiteLanguage || 'en',
            token: 'mock_jwt_token_' + Date.now()
        };

        localStorage.setItem(this.currentUserKey, JSON.stringify(user));
        return user;
    }

    logout() {
        localStorage.removeItem(this.currentUserKey);
        sessionStorage.removeItem(this.currentUserKey);
        window.location.href = 'index.html';
    }

    updateProfile(updatedData) {
        const currentUser = this.getUser() || {};
        const newProfile = { ...currentUser, ...updatedData };
        localStorage.setItem(this.currentUserKey, JSON.stringify(newProfile));
        return newProfile;
    }

    // History Management
    getHistory() {
        try {
            return JSON.parse(localStorage.getItem(this.historyKey)) || [];
        } catch (e) {
            return [];
        }
    }

    addHistoryItem(item) {
        const history = this.getHistory();
        const newItem = {
            id: 'q_' + Date.now(),
            date: new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }),
            ...item
        };
        history.unshift(newItem);
        localStorage.setItem(this.historyKey, JSON.stringify(history.slice(0, 50))); // Keep last 50
        return newItem;
    }

    deleteHistoryItem(id) {
        let history = this.getHistory();
        history = history.filter(h => h.id !== id);
        localStorage.setItem(this.historyKey, JSON.stringify(history));
        return history;
    }

    // Saved Advice Management
    getSavedAdvice() {
        try {
            return JSON.parse(localStorage.getItem(this.savedAdviceKey)) || [];
        } catch (e) {
            return [];
        }
    }

    saveAdvice(advice) {
        const saved = this.getSavedAdvice();
        if (saved.some(s => s.question === advice.question)) {
            return false; // Already saved
        }
        const newSave = {
            id: 'saved_' + Date.now(),
            savedAt: new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }),
            ...advice
        };
        saved.unshift(newSave);
        localStorage.setItem(this.savedAdviceKey, JSON.stringify(saved));
        return true;
    }

    removeSavedAdvice(id) {
        let saved = this.getSavedAdvice();
        saved = saved.filter(s => s.id !== id);
        localStorage.setItem(this.savedAdviceKey, JSON.stringify(saved));
        return saved;
    }
}

const authService = new AuthService();

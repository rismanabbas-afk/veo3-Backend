# Veo3 Backend API

Simple Express backend for AI video generation (Veo3-style).

## 🧠 Features
- POST /api/generate : generate dummy video (can integrate Replicate or RunwayML)
- GET / : check service status

## 🚀 How to run locally
```bash
npm install
npm start
```

## 🌍 Deploy on Render
1. Push this repo to GitHub.
2. Connect to Render -> New Web Service.
3. Build command: `npm install`
4. Start command: `npm start`
5. Add environment variable: REPLICATE_API_KEY

# 🚀 Deployment & Hosting Guide — Pranay Ogale Portfolio

This repository contains both the **Frontend** (React + TypeScript + Tailwind CSS + Framer Motion) and the **Backend** (Node.js + Express API).

---

## 📁 Repository Architecture

```
portfolio/
├── frontend/             # Single-Page Application (Vite + React)
│   ├── dist/             # Production build output
│   ├── src/              # Components, styles, store, Naruto theme
│   ├── vercel.json       # SPA routing configuration for Vercel
│   └── .env.example      # Frontend environment variables
│
└── backend/              # Node.js Express API
    ├── server.js         # REST endpoints (/api/health, POST /api/contact)
    ├── package.json      # Express & dependencies
    ├── Dockerfile        # Container setup for Render / Railway / Cloud Run
    ├── Procfile          # Native buildpack configuration
    └── .env.example      # Backend environment variables & SMTP config
```

---

## 🌐 Option 1: Fast Free Deployment (Recommended)

### Step 1: Deploy Backend on Render (Free)
1. Push this repository to your GitHub account (`https://github.com/Pranay25o/portfolio`).
2. Go to [render.com](https://render.com) and sign in with GitHub.
3. Click **New +** → **Web Service**.
4. Select your `portfolio` repository.
5. Configure the settings:
   - **Name**: `pranay-portfolio-backend`
   - **Root Directory**: `backend`
   - **Runtime**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `node server.js`
   - **Plan**: `Free`
6. Add Environment Variables (optional):
   - `PORT`: `5000`
   - `NODE_ENV`: `production`
   - `FRONTEND_URL`: `https://your-frontend-domain.vercel.app`
7. Click **Create Web Service**.
8. Copy your live backend URL (e.g. `https://pranay-portfolio-backend.onrender.com`).

---

### Step 2: Deploy Frontend on Vercel (Free)
1. Go to [vercel.com](https://vercel.com) and sign in with GitHub.
2. Click **Add New...** → **Project**.
3. Select your `portfolio` repository.
4. Configure the settings:
   - **Framework Preset**: `Vite`
   - **Root Directory**: Click `Edit` and select `frontend`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Under **Environment Variables**, add:
   - `VITE_BACKEND_URL`: `https://pranay-portfolio-backend.onrender.com` (from Step 1)
6. Click **Deploy**.
7. Your portfolio will be live at `https://your-name.vercel.app` with instant global CDN speed!

---

## 💻 Running Locally

### 1. Start the Backend:
```bash
cd backend
npm install
npm start
# Server runs on http://localhost:5000
```

### 2. Start the Frontend:
```bash
cd frontend
npm install
npm run dev
# App runs on http://localhost:5173
```

---

## 📬 Contact Form & API Features
- **Health Check**: `GET /api/health` returns operational status and uptime.
- **Contact Transmission**: `POST /api/contact` receives messages from the terminal, logs them securely, and forwards them directly to `pranayogale7@gmail.com` if SMTP is provided.

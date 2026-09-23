# ✈️ AI Travel Itinerary Planner

An AI-powered travel itinerary planner that generates personalized day-by-day travel plans based on the **destination, budget, number of days, travelers, and interests**.

## 🚀 Features

* 🌍 Enter any travel destination
* 📅 Choose the number of days
* 💰 Set your travel budget
* 👥 Specify the number of travelers
* ❤️ Select travel interests
* 🤖 Generate personalized itineraries using Gemini AI
* 🗺️ Get day-by-day places, activities, food suggestions, and approximate costs
* 💵 Budget-aware itinerary generation
* 📱 Responsive and user-friendly interface

## 🛠️ Technologies Used

### Frontend

* React.js
* JavaScript
* Vite
* React Markdown
* CSS

### Backend

* Python
* Flask
* Flask-CORS
* Google Gemini AI
* python-dotenv

## 🏗️ Project Structure

```text
AI-Travel-Itinerary-Planner/
│
├── backend/
│   ├── app.py
│   └── services/
│       ├── ai_service.py
│       └── prompt_builder.py
│
├── frontend/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── App.css
│   │   └── index.css
│   └── package.json
│
├── .gitignore
└── README.md
```

## ⚙️ How It Works

```text
User enters travel preferences
            ↓
       React Frontend
            ↓
       Flask Backend
            ↓
      Prompt Builder
            ↓
        Gemini AI
            ↓
   Generated Itinerary
            ↓
      React Interface
```

## ▶️ Running the Project

### 1. Clone the repository

```bash
git clone https://github.com/usurumarthiroxy123-cpu/AI-Travel-Itinerary-Planner.git
cd AI-Travel-Itinerary-Planner
```

### 2. Start the Backend

```bash
cd backend
```

Create and activate the virtual environment:

**Windows:**

```powershell
python -m venv venv
.\venv\Scripts\Activate.ps1
```

Install dependencies:

```bash
pip install flask flask-cors python-dotenv google-genai
```

Create a `.env` file inside `backend`:

```text
GEMINI_API_KEY=your_api_key_here
```

Start Flask:

```bash
python app.py
```

The backend will run at:

```text
http://127.0.0.1:5000
```

### 3. Start the Frontend

Open another terminal:

```bash
cd frontend
npm install
npm run dev
```

Open the local URL shown by Vite in your browser.

## 🔐 Environment Variables

The Gemini API key is stored in a `.env` file and is **not included in the GitHub repository**.

```text
GEMINI_API_KEY=your_api_key_here
```

## 🎯 Future Improvements

* 📍 Google Maps integration
* 🏨 Hotel recommendations
* ✈️ Flight information
* 🌦️ Weather-based planning
* 💾 Save and manage previous itineraries
* 📄 Export itinerary as PDF
* 🔐 User authentication

## 👩‍💻 Author

**Roxy Patricia**

B.Tech – Information Technology
Andhra University

## 📌 Project

This project was developed as a portfolio project to demonstrate skills in **React, Python, Flask, AI integration, API communication, and prompt engineering**.

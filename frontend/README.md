Add Documentation 

🧩 Project Overview

Project Name: Livestream Overlay Manager
Description:
A full-stack web app that streams a video (RTSP/YouTube), allows users to add text/logo overlays, and supports full CRUD for overlay data.

Tech Stack:
Frontend: React
Backend: Flask (Python)
Database: MongoDB
Video: RTSP → Web (via ReactPlayer or HLS)
⚙️ How to Run the Project
Backend:
cd backend
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
python app.py
Server runs on:
👉 http://127.0.0.1:5000
Frontend:
cd frontend
npm install
npm start
Frontend runs on:
👉 http://localhost:3000
🎮 Features
✅ Play livestream or video
✅ Add, move, resize overlays
✅ Save overlays to MongoDB
✅ Update and delete overlays
✅ RESTful CRUD API
✅ CORS-enabled backenf

🧠 API Endpoints
Method	Endpoint	Description
GET	/api/overlays	Get all overlays
POST	/api/overlays	Create new overlay
PUT	/api/overlays/<id>	Update overlay
DELETE	/api/overlays/<id>	Delete overlay
📺 Video Streaming Setup (Optional)

To test RTSP streaming:

Go to https://rtsp.me

Upload any video → copy RTSP URL.

Replace the url prop in ReactPlayer with that link.

Raunak Singh
Email: raunaksingh142004@gmail.com
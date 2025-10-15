from flask import Flask
from flask_cors import CORS
from routes.overlay_routes import overlay_bp

app = Flask(__name__)
CORS(app)  # enable CORS for React frontend

# Register the routes
app.register_blueprint(overlay_bp)

@app.route('/')
def home():
    return "Overlay API is running!"

if __name__ == '__main__':
    app.run(debug=True, port=5000)

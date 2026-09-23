from flask import Flask, jsonify, request
from flask_cors import CORS
from services.prompt_builder import build_prompt
from services.ai_service import generate_itinerary


app = Flask(__name__)
CORS(app)


@app.route("/")
def home():
    return jsonify({
        "message": "AI Travel Itinerary Planner API is running!"
    })


@app.route("/api/itinerary", methods=["POST"])
def itinerary():
    data = request.json

    prompt = build_prompt(data)

    print("Generated Prompt:")
    print(prompt)

    itinerary = generate_itinerary(prompt)

    return jsonify({
        "message": "Itinerary generated successfully!",
        "trip": data,
        "itinerary": itinerary
    })

if __name__ == "__main__":
    app.run(debug=True)
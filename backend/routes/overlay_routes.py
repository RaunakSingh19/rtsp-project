from flask import Blueprint, request, jsonify
from models.overlay_model import overlays_collection
from bson import ObjectId

overlay_bp = Blueprint('overlay_bp', __name__)

def serialize_overlay(overlay):
    overlay['_id'] = str(overlay['_id'])
    return overlay

# CREATE
@overlay_bp.route('/api/overlays', methods=['POST'])
def create_overlay():
    data = request.json
    result = overlays_collection.insert_one(data)
    return jsonify({"message": "Overlay created", "id": str(result.inserted_id)}), 201

# READ
@overlay_bp.route('/api/overlays', methods=['GET'])
def get_overlays():
    overlays = list(overlays_collection.find())
    return jsonify([serialize_overlay(o) for o in overlays])

# UPDATE
@overlay_bp.route('/api/overlays/<id>', methods=['PUT'])
def update_overlay(id):
    data = request.json
    overlays_collection.update_one({"_id": ObjectId(id)}, {"$set": data})
    return jsonify({"message": "Overlay updated"})

# DELETE
@overlay_bp.route('/api/overlays/<id>', methods=['DELETE'])
def delete_overlay(id):
    overlays_collection.delete_one({"_id": ObjectId(id)})
    return jsonify({"message": "Overlay deleted"})

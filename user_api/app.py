from flask import Flask, request, jsonify

app = Flask(__name__)

users = {}
next_user_id = 1

@app.route('/user', methods=['POST'])
def create_user():
    global next_user_id
    data = request.get_json()

    if not data or not data.get("name") or not data.get("email"):
        return jsonify({"error": "Name and email are required"}), 400

    user_id = next_user_id
    users[user_id] = {
        "id": user_id,
        "name": data["name"],
        "email": data["email"]
    }
    next_user_id += 1

    return jsonify(users[user_id]), 201

if __name__ == '__main__':
    app.run(debug=True)

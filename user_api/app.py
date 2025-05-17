# from flask import Flask, request, jsonify

# app = Flask(__name__)

# users = {}
# next_user_id = 1

# @app.route('/user', methods=['POST'])
# def create_user():
#     global next_user_id
#     data = request.get_json()

#     if not data or not data.get("name") or not data.get("email") or not data.get("password"):
#         return jsonify({"error": "Name,email or password are required"}), 400

#     user_id = next_user_id
#     users[user_id] = {
#         "id": user_id,
#         "name": data["name"],
#         "email": data["email"],
#         "password": data["password"],
#     }
#     next_user_id += 1

#     return jsonify(users[user_id]), 201

# if __name__ == '__main__':
#     app.run(debug=True)


from flask import Flask, request, jsonify

app = Flask(__name__)

# Temporary in-memory user store
users = {}
next_user_id = 1

@app.route("/signup", methods=["POST"])
def signup():
    global next_user_id
    data = request.get_json()

    name = data.get("name")
    email = data.get("email")
    password = data.get("password")

    if not name or not email or not password:
        return jsonify({"message": "Name, email, and password are required"}), 400

    for user in users.values():
        if user["email"] == email:
            return jsonify({"message": "Email already registered"}), 409

    user_id = next_user_id
    users[user_id] = {"id": user_id, "name": name, "email": email, "password": password}
    next_user_id += 1

    return jsonify({"message": "Sign Up successful", "user": users[user_id]}), 201

@app.route("/login", methods=["POST"])
def login():
    data = request.get_json()

    email = data.get("email")
    password = data.get("password")

    if not email or not password:
        return jsonify({"message": "Email and password are required"}), 400

    for user in users.values():
        if user["email"] == email and user["password"] == password:
            return jsonify({"message": "Login successful", "user": user}), 200

    return jsonify({"message": "Invalid email or password"}), 401

if __name__ == "__main__":
    app.run(debug=True)

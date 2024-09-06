from flask import Flask, request, jsonify
from user import db
from user_controller import create_api

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///users.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db.init_app(app)
app.request = request
app.jsonify = jsonify

with app.app_context():
    db.create_all()

api = create_api(app)

if __name__ == '__main__':
    app.run(debug=True)

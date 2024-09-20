# app.py
from flask import Flask
from user_controller import user_bp

app = Flask(__name__)

# Registrar el blueprint del controlador
app.register_blueprint(user_bp)

if __name__ == '__main__':
    app.run(debug=True)
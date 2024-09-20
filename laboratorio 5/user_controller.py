# user_controlrest.py

from flask import Blueprint, render_template
from user_api_service import fetch_users

# Crear un blueprint para modularizar el controlador
user_bp = Blueprint('user_bp', __name__)

@user_bp.route('/')
def index():
    """
    Esta función maneja la ruta principal ('/') y llama a la función
    fetch_users para obtener los datos de los usuarios.
    """
    users = fetch_users()
    return render_template('index.html', users=users)

# user_services.py

import requests

def fetch_users():
    """
    Esta función obtiene los usuarios desde la API JSONPlaceholder.
    Retorna una lista de usuarios en formato JSON si la respuesta es exitosa.
    """
    try:
        response = requests.get("https://jsonplaceholder.typicode.com/users")
        response.raise_for_status()  # Levanta una excepción si la petición falla
        return response.json()
    except requests.exceptions.RequestException as e:
        print(f"Error al consumir la API: {e}")
        return []
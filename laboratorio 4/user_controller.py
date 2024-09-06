from flask_restful import Api, Resource
from flask import request, jsonify
from werkzeug.security import check_password_hash
from user_repository import UserRepository

def create_api(app):
    api = Api(app)
    class UserResource(Resource):
        def get(self):
            users = UserRepository.get_all_users()
            return [{"id": user.id, "username": user.username, "password":user.password} for user in users]

        def post(self):
            data = request.get_json()
            new_user = UserRepository.create_user(data['name'], data['username'], data['email'], data['password'])
            return {"id": new_user.id, "username": new_user.username}

    class SingleUserResource(Resource):
        def get(self, user_id):
            user = UserRepository.get_user_by_id(user_id)
            if user is None:
                return {"message": "User not found"}, 404
            return {"id": user.id, "username": user.username}

        def put(self, user_id):
            data = app.request.get_json()
            user = UserRepository.update_user(user_id, data.get('username'), data.get('password'))
            if user is None:
                return {"message": "User not found"}, 404
            return {"id": user.id, "username": user.username}

        def delete(self, user_id):
            user = UserRepository.delete_user(user_id)
            if user is None:
                return {"message": "User not found"}, 404
            return {"message": "User deleted successfully"}
        
    class LoginResource(Resource):
        def post(self):
            data = request.get_json()
            username = data.get('username')
            password = data.get('password')
            
            # Buscar usuario por username
            user = UserRepository.get_user_by_username(username)
            if user and check_password_hash(user.password, password):
                return {"message": "Login successful", "user": {"id": user.id, "username": user.username}}
            return {"message": "Invalid credentials"}, 401
        
    api.add_resource(UserResource, '/users')
    api.add_resource(SingleUserResource, '/users/<int:user_id>')
    api.add_resource(LoginResource, '/login')

    return api

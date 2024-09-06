from user import db, User

class UserRepository:

    @staticmethod
    def get_all_users():
        return User.query.all()

    @staticmethod
    def get_user_by_id(user_id):
        return User.query.get(user_id)
    
    @staticmethod
    def get_user_by_username(username):
        return User.query.filter_by(username=username).first()

    @staticmethod
    def create_user(name,username, email,password):
        new_user = User(name=name, username=username, email=email)
        new_user.set_password(password)
        db.session.add(new_user)
        db.session.commit()
        return new_user

    @staticmethod
    def update_user(user_id, username=None, password=None):
        user = User.query.get(user_id)
        if user:
            if username:
                user.username = username
            if password:
                user.password = password
            db.session.commit()
        return user

    @staticmethod
    def delete_user(user_id):
        user = User.query.get(user_id)
        if user:
            db.session.delete(user)
            db.session.commit()
        return user

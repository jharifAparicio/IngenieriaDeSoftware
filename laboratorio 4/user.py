from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
from werkzeug.security import generate_password_hash, check_password_hash

db = SQLAlchemy()

class User(db.Model):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), nullable=False)
    username = db.Column(db.String(80), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(120), nullable=False)
    update_at = db.Column(db.DateTime, default=datetime.utcnow)
    image = db.Column(db.String(255), nullable=True)
    rol = db.Column(db.String(50), nullable=False, default='user')

    def update_profile(self, name=None, email=None, image=None):
        if name:
            self.name = name
        if email:
            self.email = email
        if image:
            self.image = image
        self.update_at = datetime.now()

    def set_password(self, password):
        self.password = generate_password_hash(password)

    def password_valid(self, password):
        return check_password_hash(self.password, password)

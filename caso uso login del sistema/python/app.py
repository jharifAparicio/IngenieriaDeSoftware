from flask import Flask, render_template, request, redirect, url_for, flash

app = Flask(__name__)
app.secret_key = 'supersecretkey' # Necesario para manejar las sesiones y los mensajes flash

# Clase para representar al usuario
class User:
    def __init__(self, id, username, password):
        self.id = id
        self.username = username
        self.password = password

    def password_valid(self, password):
        return self.password == password

# Controlador de usuarios
class UserController:
    def __init__(self):
        self.user_list = [
            User(1, 'johnDoe', 'password123'),
            User(2, 'janeDoe', 'ilovejavascript'),
            User(3, 'admin', 'admin123'),
            User(4, 'user123', 'pass123'),
            User(5, 'testuser', 'testPassword'),
            User(6, 'ramiro', '123')
        ]

    def access_allowed(self, username, password):
        return any(user.username == username and user.password_valid(password) for user in self.user_list)

ctrl_user = UserController()

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/login', methods=['POST'])
def login():
    username = request.form['cuenta']
    password = request.form['contrasena']

    if ctrl_user.access_allowed(username, password):
        flash('Acceso permitido')
        return redirect(url_for('index'))
    else:
        flash('Acceso denegado')
        return redirect(url_for('index'))

if __name__ == '__main__':
    app.run(debug=True)
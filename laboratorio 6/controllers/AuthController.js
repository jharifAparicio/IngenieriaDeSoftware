const UserService = require('../services/UserService');

class AuthController {
    // Mostrar el formulario de login
    static showLoginForm(req, res) {
        res.render('users/login');
    }

    // Manejar el login de usuario sin encriptación
    static async login(req, res) {
        const { username, password } = req.body;
        try {
            // Buscar al usuario por nombre de usuario
            const user = await UserService.getUserByUsername(username);
            if (!user) {
                return res.render('users/login', { error: 'Usuario no encontrado' });
            }

            // Comparar la contraseña sin encriptación
            if (user.password !== password) {
                return res.render('users/login', { error: 'Contraseña incorrecta' });
            }

            // Guardar el usuario en la sesión
            req.session.user = user;
            res.redirect('/users');
        } catch (err) {
            res.status(500).send('Error al iniciar sesión');
        }
    }

    // Cerrar sesión
    static logout(req, res) {
        req.session.destroy();
        res.redirect('/login');
    }
}

module.exports = { AuthController };

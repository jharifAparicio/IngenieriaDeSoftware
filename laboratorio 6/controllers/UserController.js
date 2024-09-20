const UserService = require('../services/UserService');
const multer = require('multer');
const path = require('path');

// Configuración de Multer para subir imágenes
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}${path.extname(file.originalname)}`);
  }
});
const upload = multer({ storage });

class UserController {
  // Mostrar todos los usuarios
  static index(req, res) {
    UserService.getAllUsers((err, users) => {
      if (err) throw err;
      res.render('users/index', { users });
    });
  }

  // Mostrar formulario de creación
  static create(req, res) {
    res.render('users/create');
  }

  // Guardar nuevo usuario sin encriptación de contraseña
  static async store(req, res) {
    const user = {
      ...req.body,
      imagen: req.file ? `/uploads/${req.file.filename}` : null
    };
    try {
      await UserService.createUser(user);
      res.redirect('/users');
    } catch (err) {
      res.status(500).send('Error creando usuario');
    }
  }

  // Mostrar un solo usuario
  static show(req, res) {
    const id = req.params.id;
    UserService.getUserById(id, (err, user) => {
      if (err) throw err;
      res.render('users/show', { user });
    });
  }

  // Mostrar formulario de edición
  static edit(req, res) {
    const id = req.params.id;
    UserService.getUserById(id, (err, user) => {
      if (err) throw err;
      res.render('users/edit', { user });
    });
  }

  // Actualizar usuario
  static update(req, res) {
    const id = req.params.id;
    const user = {
      ...req.body,
      imagen: req.file ? `/uploads/${req.file.filename}` : req.body.oldImagen
    };
    UserService.updateUser(id, user, (err) => {
      if (err) throw err;
      res.redirect(`/users/${id}`);
    });
  }

  // Eliminar usuario
  static delete(req, res) {
    const id = req.params.id;
    UserService.deleteUser(id, (err) => {
      if (err) throw err;
      res.redirect('/users');
    });
  }
}

module.exports = { UserController, upload };

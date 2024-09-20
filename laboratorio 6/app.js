const express = require('express');
const bodyParser = require('body-parser');
const { UserController, upload } = require('./controllers/UserController');
const { AuthController } = require('./controllers/AuthController');
const path = require('path');
const session = require('express-session');

const app = express();
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Servir archivos estáticos (CSS, imágenes, etc.)
app.use(express.static(path.join(__dirname, 'public')));  // Para archivos CSS y otros
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));  // Para servir las imágenes de los usuarios

app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({
  secret: 'mi_secreto',  // Cambia este valor por algo más seguro
  resave: false,
  saveUninitialized: true
}));

// Middleware para proteger rutas
app.use((req, res, next) => {
  if (!req.session.user && req.path.startsWith('/users')) {
    return res.redirect('/login');
  }
  next();
});

// Pasar el usuario a las vistas
app.use((req, res, next) => {
  res.locals.user = req.session.user;
  next();
});

// Rutas de usuarios
app.get('/users', UserController.index);
app.get('/users/create', UserController.create);
app.post('/users', upload.single('imagen'), UserController.store);
app.get('/users/:id', UserController.show);
app.get('/users/:id/edit', UserController.edit);
app.post('/users/:id', upload.single('imagen'), UserController.update);
app.post('/users/:id/delete', UserController.delete);

// Rutas de autenticación
app.get('/login', AuthController.showLoginForm);
app.post('/login', AuthController.login);
app.get('/logout', AuthController.logout);

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});

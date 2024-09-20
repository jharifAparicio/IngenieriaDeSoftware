const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db.sqlite3');

class UserService {
    // Obtener todos los usuarios
    static getAllUsers(callback) {
        db.all('SELECT * FROM users', [], (err, rows) => {
            if (err) {
                callback(err);
            } else {
                callback(null, rows);
            }
        });
    }

    // Obtener un usuario por ID
    static getUserById(id, callback) {
        db.get('SELECT * FROM users WHERE id = ?', [id], (err, row) => {
            if (err) {
                callback(err);
            } else {
                callback(null, row);
            }
        });
    }

    // Obtener un usuario por nombre de usuario
    static getUserByUsername(username) {
        return new Promise((resolve, reject) => {
            db.get('SELECT * FROM users WHERE username = ?', [username], (err, row) => {
                if (err) {
                    return reject(err);
                }
                resolve(row);
            });
        });
    }

    // Crear un usuario
    static createUser(user) {
        return new Promise((resolve, reject) => {
            const { name, username, email, password, imagen } = user;
            db.run('INSERT INTO users (name, username, email, password, imagen) VALUES (?, ?, ?, ?, ?)',
                [name, username, email, password, imagen],
                function (err) {
                    if (err) {
                        return reject(err);
                    }
                    resolve(this.lastID);
                }
            );
        });
    }

    // Actualizar un usuario
    static updateUser(id, user, callback) {
        const { name, username, email, password, imagen } = user;
        db.run('UPDATE users SET name = ?, username = ?, email = ?, password = ?, imagen = ? WHERE id = ?',
            [name, username, email, password, imagen, id],
            (err) => {
                callback(err);
            }
        );
    }

    // Eliminar un usuario
    static deleteUser(id, callback) {
        db.run('DELETE FROM users WHERE id = ?', [id], (err) => {
            callback(err);
        });
    }
}

module.exports = UserService;

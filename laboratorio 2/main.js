const express = require('express');
const UserService = require('./userService');

const app = express();
const port = 3000;

app.use(express.json());

const userService = new UserService();

app.get('/', (req, res) => {
    res.send('Bienvenido a la API de usuarios');
});

app.get('/users', (req, res) => {
    res.json(userService.getUsers());
});

app.post('/users', (req, res) => {
    const { username, password } = req.body;
    const newUser = new User(faker.datatype.uuid(), username, password);
    userService.addUser(newUser);
    res.status(201).json(newUser);
});

app.put('/users/:id', (req, res) => {
    const { id } = req.params;
    const { username, password } = req.body;
    const success = userService.editUser(id, { username, password });
    if (success) {
        res.json({ message: 'User updated successfully' });
    } else {
        res.status(404).json({ message: 'User not found' });
    }
});

app.delete('/users/:id', (req, res) => {
    const { id } = req.params;
    const success = userService.deleteUser(id);
    if (success) {
        res.json({ message: 'User deleted successfully' });
    } else {
        res.status(404).json({ message: 'User not found' });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
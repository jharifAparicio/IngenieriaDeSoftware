const User = require('./user');
const faker = require('faker');

class UserService {
    constructor() {
        this.userList = [];
        this.addInitialUser('Jharif', '123');
        this.generateRandomUsers(3);
    }

    addInitialUser(username, password) {
        const initialUser = new User(faker.datatype.uuid(), username, password);
        this.addUser(initialUser);
    }
    generateRandomUsers(count) {
        for (let i = 0; i < count-1; i++) {
            this.addUser(
                new User(
                    faker.datatype.uuid(),
                    faker.internet.userName(),
                    faker.internet.password()
                )
            );
        }
    }

    getUsers() {
        return this.userList;
    }

    addUser(user) {
        this.userList.push(user);
    }

    editUser(id, updatedUser) {
        const index = this.userList.findIndex(user => user.id === id);
        if (index !== -1) {
            this.userList[index] = { ...this.userList[index], ...updatedUser };
            return true;
        }
        return false;
    }

    deleteUser(id) {
        const initialLength = this.userList.length;
        this.userList = this.userList.filter(user => user.id !== id);
        return this.userList.length !== initialLength;
    }
}

module.exports = UserService;
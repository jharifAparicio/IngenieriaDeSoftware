class UserController {
    constructor() {
        this.userList = [
            new User(1, 'johnDoe', 'password123'),
            new User(2, 'janeDoe', 'ilovejavascript'),
            new User(3, 'admin', 'admin123'),
            new User(4, 'user123', 'pass123'),
            new User(5, 'testuser', 'testPassword'),
            new User(6, 'ramiro', '123')
        ];
    }

    getUsers() {
        return this.userList;
    }

    accessAllowed(username, password) {
        return this.userList.some(user => user.username === username && user.passwordValid(password));
    }
}
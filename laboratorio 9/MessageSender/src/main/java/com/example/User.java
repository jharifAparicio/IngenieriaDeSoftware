package com.example;

public class User {
    private String username;
    private String password;
    private String email;
    private String phone;

    public User(String username, String password, String email, String phone) {
        this.username = username;
        this.password = password;
        this.email = email;
        this.phone = phone;
    }

    public void send(ISender sender, String msg) {
        sender.sendMsg(msg);
    }

    public String getEmail() {
        return email;
    }

    public String getPhone() {
        return phone;
    }
    public String getUsername() {
        return username;
    }
    
}

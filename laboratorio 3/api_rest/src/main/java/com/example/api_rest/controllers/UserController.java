package com.example.api_rest.controllers;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.api_rest.models.UserModel;
import com.example.api_rest.services.UserService;

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    UserService userService;

    @GetMapping()
    public ArrayList<UserModel> getUsers() {
        return userService.getUsers();   
    }

    @PostMapping()
    public UserModel saveUser(@RequestBody UserModel user) {
        return userService.saveUser(user);
    }
}


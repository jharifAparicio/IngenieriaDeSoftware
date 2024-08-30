package com.example.api_rest.controllers;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.api_rest.models.UserModel;
import com.example.api_rest.sevices.UserService;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.PostMapping;

@RestController
@RequestMapping("/user")
public class UserController {
    @Autowired
    UserService UserService;
    
    @GetMapping()
    public ArrayList<UserModel> getUsers() {
        return UserService.getUsers();   
    }
    @PostMapping()
    public UserModel saveUser(@RequestParam UserModel user) {
        return UserService.saveUser(user);
    }
}


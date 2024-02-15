package com.example.eventpro.controller;



import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.example.eventpro.model.register;
import com.example.eventpro.service.registerService;

@RestController
@RequestMapping("/api/register")
@CrossOrigin(origins = "http://your-frontend-domain.com")

public class registerController {

    private final registerService registerService;

    @Autowired
    public registerController(registerService registerService) {
        this.registerService = registerService;
    }

    @GetMapping
    public List<register> getAllUsers() {
        return registerService.getAllUsers();
    }

    @GetMapping("/{id}")
    public register getUserById(@PathVariable long id) {
        return registerService.getUserById(id);
    }

    @PostMapping
    public register createUser(@RequestBody register user) {
    return registerService.createUser(user);
    }


    @PutMapping("/{id}")
    public register updateUser(@PathVariable long id, @RequestBody register user) {
        return registerService.updateUser(id, user);
    }

    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable long id) {
        registerService.deleteUser(id);
   }
}
package com.example.eventpro.service;



import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.eventpro.model.register;
import com.example.eventpro.repository.*;

@Service
public class registerService {

        private final registerRepository RegisterRepo;
    
        @Autowired
        public registerService(registerRepository RegisterRepo) {
            this.RegisterRepo = RegisterRepo;
        }
    
        public List<register> getAllUsers() {
            return RegisterRepo.findAll();
        }
    
        public register getUserById(Long id) {
            return RegisterRepo.findById(id).orElse(null);
        }
    
        public register createUser(register user) {
            return RegisterRepo.save(user);
        }
    
        public register updateUser(Long id, register user) {
            register existingUser = RegisterRepo.findById(id).orElse(null);
            if (existingUser != null) {
                existingUser.setName(user.getName());
                existingUser.setCompany(user.getCompany());
                existingUser.setEmail(user.getEmail());
                existingUser.setPassword(user.getPassword());
                existingUser.setConfirmPassword(user.getConfirmPassword());
                existingUser.setPhoneNumber(user.getPhoneNumber());
                existingUser.setRole(user.getRole());
        
                return RegisterRepo.save(existingUser);
            }
            return null;
        }
    
        public void deleteUser(Long id) {
            RegisterRepo.deleteById(id);
        }

   }
package com.developer.test.controller;

import com.developer.test.Role;
import com.developer.test.repository.RoleRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/role")
public class RoleController {

    @Autowired
    private RoleRepository roleRepository;

    @GetMapping("/role")
    public List<Role> getAllroles() {
        System.out.println("working"+ RoleRepository.findAll());
        return RoleRepository.findAll();
    }
}
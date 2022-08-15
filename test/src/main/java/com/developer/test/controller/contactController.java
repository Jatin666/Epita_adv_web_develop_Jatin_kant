package com.developer.test.controller;



import com.developer.test.Address;


import com.developer.test.Contact;
import com.developer.test.repository.ContactRepository;
import com.developer.test.repository.addressRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/contact")
public class contactController {

    @Autowired
    private ContactRepository contactRepository;

    @GetMapping("/contact")
    public List<Contact> getAllContact() {
        System.out.println("working"+ contactRepository.findAll());
        return contactRepository.findAll();
    }
}
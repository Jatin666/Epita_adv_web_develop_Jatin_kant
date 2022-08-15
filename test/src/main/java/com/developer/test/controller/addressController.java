package com.developer.test.controller;



import com.developer.test.Address;
import com.developer.test.repository.MovieRepository;

import com.developer.test.repository.addressRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/address")
public class addressController {

    @Autowired
    private addressRepository  addressRepository;

    @GetMapping("/address")
    public List<Address> getAllAddress() {
        System.out.println("working"+ addressRepository.findAll());
        return addressRepository.findAll();
    }
}
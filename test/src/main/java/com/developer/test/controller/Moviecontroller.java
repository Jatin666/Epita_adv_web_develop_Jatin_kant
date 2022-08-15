package com.developer.test.controller;


import com.developer.test.Movies;
import com.developer.test.repository.MovieRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/movies")
public class Moviecontroller {

    @Autowired
    private MovieRepository MovieRepository;

    @GetMapping("/movies")
    public List<Movies> getAllMovies() {
        System.out.println("working"+ MovieRepository.findAll());
        return MovieRepository.findAll();
    }
}
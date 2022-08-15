package com.developer.test.repository;



import com.developer.test.SeenMovies;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SeenRepository extends JpaRepository<SeenMovies,Integer>{



}

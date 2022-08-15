package com.developer.test.repository;


import com.developer.test.Address;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface addressRepository extends JpaRepository<Address,Integer>{



}

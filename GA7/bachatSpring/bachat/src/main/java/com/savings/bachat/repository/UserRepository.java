package com.savings.bachat.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.savings.bachat.entity.User;


@Repository
public interface UserRepository extends JpaRepository<User, String>{

}



package com.example.api_rest.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.api_rest.models.UserModel;

@Repository
public interface UserRepository extends CrudRepository<UserModel,Long> {
    
}
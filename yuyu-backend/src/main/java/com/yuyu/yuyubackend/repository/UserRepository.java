package com.yuyu.yuyubackend.repository;

import java.util.List;

import com.yuyu.yuyubackend.model.User;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User,Integer> {
    List<User> findByName(String name);
}

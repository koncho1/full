package com.example.demo.user;

import com.example.demo.stadium.Stadium;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserSave extends JpaRepository<User,Long> {
    @Query("SELECT u FROM User u WHERE u.login=?1")
    Optional<User> findUserByName(String name);
}

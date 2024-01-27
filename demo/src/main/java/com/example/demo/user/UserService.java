package com.example.demo.user;

import com.example.demo.stadium.Stadium;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserSave userSave;

    @Autowired
    public UserService(UserSave userSave){this.userSave=userSave;}

    public List<User> getUsers(){return userSave.findAll();}


    public Optional<User> getUser(String login){ return userSave.findUserByName(login);
    }
}

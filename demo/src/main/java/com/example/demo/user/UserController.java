package com.example.demo.user;


import com.example.demo.stadium.Stadium;
import com.example.demo.stadium.StadiumService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping(path="user")
public class UserController {
    private final UserService userService;

    @Autowired
    public UserController(UserService userService){this.userService=userService;}

    @GetMapping(path="xd")
    public List<User> getUsers(){return userService.getUsers();}

    @PostMapping
    public boolean GetUser(@RequestBody User user)

    {
           Optional<User> current= userService.getUser(user.getLogin());
           User x=current.get();
           return x.getPassword().equals(user.getPassword());


    }

}

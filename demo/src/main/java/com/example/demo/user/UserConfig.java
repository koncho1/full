package com.example.demo.user;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;

@Configuration
public class UserConfig {
    @Bean
    CommandLineRunner cl(UserSave userSave){
        return args -> {
            User admin=new User(1L,"admin","admin");
            User usr=new User(2L,"user1","123");


            userSave.saveAll(List.of(admin,usr));
        };
    }
}

package com.example.demo.club;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.time.ZonedDateTime;
import java.util.List;

@Configuration
public class ClubConfig {

    @Bean
    CommandLineRunner commandLineRunner(ClubSave clubSave){
        return args -> {
           Club chelsea= new Club(1L,"Chelsea F.C.","Londyn",1905L);
           Club arsenal= new Club(2L,"Arsenal F.C.","Londyn",1886L);
            Club legia= new Club(3L,"Legia Warszawa","Warszawa",1916L);
            Club slask= new Club(4L,"Sląsk Wrocław","Wrocław",1947L);
            Club jagiel= new Club(5L,"Jagiellonia Białystok","Białystok",1920L);
            Club lech= new Club(6L,"Lech Poznań","Poznań",1920L);
            Club rakow= new Club(7L,"Raków Częstochowa","Raków",1916L);

           chelsea.setModificationDate(ZonedDateTime.now());
           arsenal.setModificationDate(ZonedDateTime.now());
           legia.setModificationDate(ZonedDateTime.now());
            slask.setModificationDate(ZonedDateTime.now());
            jagiel.setModificationDate(ZonedDateTime.now());
            lech.setModificationDate(ZonedDateTime.now());
            rakow.setModificationDate(ZonedDateTime.now());
           clubSave.saveAll(List.of(chelsea,arsenal,legia,slask,jagiel,lech,rakow));
        };

    }
}

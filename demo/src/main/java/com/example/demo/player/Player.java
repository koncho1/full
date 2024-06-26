package com.example.demo.player;

import com.example.demo.club.Club;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import java.time.ZonedDateTime;

@Entity
@Table(name ="player")
public class Player {

    @Id
    @Column(name="id")
    private Long id;

    private String name;

    private String surname;

    private Long age;

    private ZonedDateTime modificationDate;




    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    public Long getAge() {
        return age;
    }

    public void setAge(Long age) {
        this.age = age;
    }

    public ZonedDateTime getModificationDate() {
        return modificationDate;
    }

    public void setModificationDate(ZonedDateTime modificationDate) {
        this.modificationDate = modificationDate;
    }



    public Player(Long id, String name, String surname, Long age) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.age = age;
    }

    public Player() {
    }
}

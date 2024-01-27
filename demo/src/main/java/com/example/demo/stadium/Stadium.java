package com.example.demo.stadium;

import com.example.demo.club.Club;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import java.time.ZonedDateTime;


@Entity
@Table(name="stadium")
public class Stadium {

    @Id
    @Column(name="id")
    private Long id;

    private String name;

    private Long seats;


    public ZonedDateTime getModificationDate() {
        return modificationDate;
    }

    public void setModificationDate(ZonedDateTime modificationDate) {
        this.modificationDate = modificationDate;
    }

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

    public Long getSeats() {
        return seats;
    }

    public void setSeats(Long seats) {
        this.seats = seats;
    }


    public Stadium(Long id, String name, Long seats) {
        this.id = id;
        this.name = name;
        this.seats = seats;
    }

    public Stadium() {
    }
}

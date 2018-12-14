package com.example.brysonservice.Models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

@Entity
@DiscriminatorValue("Shop")
public class Shop extends Business {

    @Column(name="type")
    private String type;


    public Shop(String title, String summary, String tag, User user, String type) {
        super(title, summary, tag, user);
        this.user = user;
        this.type = type;
    }

    public Shop() {
    }



    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }
}

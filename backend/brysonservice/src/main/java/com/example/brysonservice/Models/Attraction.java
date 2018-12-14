package com.example.brysonservice.Models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

@Entity(name="business")
@DiscriminatorValue("Attraction")
public class Attraction extends Business {

    @Column(name ="price")
    private int price;


    public Attraction(String title, String summary, String tag, User user, int price) {
        super(title, summary, tag, user);
        this.price = price;
    }

    public Attraction() {
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }
}

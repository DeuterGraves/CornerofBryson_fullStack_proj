package com.example.brysonservice.Models;

import javax.persistence.Column;

public class Attraction extends Business {

    @Column(name ="price")
    private int price;

    public Attraction(String title, String summary, String tag, User user, int price) {
        super(title, summary, tag, user);
        this.price = price;
    }

    public Attraction(int price) {
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }
}

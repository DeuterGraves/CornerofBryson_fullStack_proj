package com.example.brysonservice.Models;

import javax.persistence.Column;

public class Shop extends Business {

    @Column(name="type")
    private String type;

    public Shop(String title, String summary, String tag, User user, String type) {
        super(title, summary, tag, user);
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

package com.example.brysonservice.Models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

@Entity(name="business")
@DiscriminatorValue("Restaurant")
public class Restaurant extends Business {

    @Column(name="price_range")
    private int priceRange;

    @Column(name="cuisine")
    private String cuisine;


    public Restaurant(String title, String summary, String tag, User user, int priceRange, String cuisine) {
        super(title, summary, tag, user);
        this.priceRange = priceRange;
        this.cuisine = cuisine;
    }

    public Restaurant() {
    }

    public int getPriceRange() {
        return priceRange;
    }

    public void setPriceRange(int priceRange) {
        this.priceRange = priceRange;
    }

    public String getCuisine() {
        return cuisine;
    }

    public void setCuisine(String cuisine) {
        this.cuisine = cuisine;
    }

}

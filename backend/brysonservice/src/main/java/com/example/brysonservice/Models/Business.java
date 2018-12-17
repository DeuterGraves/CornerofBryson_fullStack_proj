package com.example.brysonservice.Models;

import com.example.brysonservice.Enums.BusinessTag;
import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

@Entity
@Table(name="businesses")
public class Business {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="title")
    private String title;

    @Column(name="summary")
    private String summary;

    @Column(name="type")
    private String type;

    @Column(name ="price")
    private int price;

    @Column(name="tag")
    private BusinessTag tag;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name="user_id", nullable = false)
    private User user;

    public Business(String title, String summary, String type, int price, BusinessTag tag, User user) {
        this.title = title;
        this.summary = summary;
        this.type = type;
        this.price = price;
        this.tag = tag;
        this.user = user;
    }

    public Business() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getSummary() {
        return summary;
    }

    public void setSummary(String summary) {
        this.summary = summary;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public BusinessTag getTag() {
        return tag;
    }

    public void setTag(BusinessTag tag) {
        this.tag = tag;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    //    photo
//    fulltext
//    location(address?lat/long?)
//    date - how will you handle this?


}

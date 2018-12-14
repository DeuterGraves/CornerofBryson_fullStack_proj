package com.example.brysonservice.Models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

@Entity(name = "businesses")
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
@DiscriminatorColumn(name="business_type", discriminatorType = DiscriminatorType.STRING)
public abstract class Business {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Long id;

    @Column(name="title")
    public String title;

    @Column(name="summary")
    public String summary;

    @Column(name="tag")
    public String tag;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name="user_id", nullable = false)
    public User user;


//    photo
//    fulltext
//    location(address?lat/long?)
//    date - how will you handle this?


    public Business(String title, String summary, String tag, User user) {
        this.title = title;
        this.summary = summary;
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

    public String getTag() {
        return tag;
    }

    public void setTag(String tag) {
        this.tag = tag;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}

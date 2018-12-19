package com.example.brysonservice.Models;

import com.example.brysonservice.Enums.BusinessTag;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name="reviews")
public class Review {

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

    @Column(name="photo")
    private String photo;

    @Column(name="reviewText")
    private String reviewText;

    @Column(name="address")
    private String address;

    @CreationTimestamp
    private LocalDateTime createDateTime;

    @JsonIgnoreProperties(value = "reviews")
    @ManyToOne
    @JoinColumn(name="user_id", nullable = false)
    private User user;

    public Review(String title, String summary, String type, int price, BusinessTag tag, String photo, String reviewText, String address, User user) {
        this.title = title;
        this.summary = summary;
        this.type = type;
        this.price = price;
        this.tag = tag;
        this.photo = photo;
        this.reviewText = reviewText;
        this.address = address;
        this.user = user;
    }

    public Review() {
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

    public String getPhoto() {
        return photo;
    }

    public void setPhoto(String photo) {
        this.photo = photo;
    }

    public String getReviewText() {
        return reviewText;
    }

    public void setReviewText(String reviewText) {
        this.reviewText = reviewText;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public LocalDateTime getCreateDateTime() {
        return createDateTime;
    }

    public void setCreateDateTime(LocalDateTime createDateTime) {
        this.createDateTime = createDateTime;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public String getShortDate(){
        LocalDateTime longTime = this.getCreateDateTime();
        String longDate = longTime.toString();
        String date = longDate.substring(0,10);
        String time = longDate.substring(11, 19);
        return date + " " + time;
    }

    public Long getuser_id(){
        User thisUser = getUser();
        return thisUser.getId();
    }

    //    location(address?lat/long?)
//    date - how will you handle this?


}

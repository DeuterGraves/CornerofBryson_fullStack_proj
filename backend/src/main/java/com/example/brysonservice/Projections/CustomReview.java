package com.example.brysonservice.Projections;

import com.example.brysonservice.Enums.BusinessTag;
import com.example.brysonservice.Models.Review;
import com.example.brysonservice.Models.User;
import org.springframework.data.rest.core.config.Projection;

import java.time.LocalDateTime;

@Projection(name="customReview", types = Review.class)
public interface CustomReview {
    Long getId();
    String getTitle();
    String getSummary();
    String getType();
    int getPrice();
    BusinessTag getTag();
    String getPhoto();
    String getReviewText();
    String getAddress();
    User getUser();
    Long getuser_id();
    String getShortDate();
}

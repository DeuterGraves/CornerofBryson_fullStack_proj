package com.example.brysonservice.Repositories.ReviewRepository;

import com.example.brysonservice.Enums.BusinessTag;
import com.example.brysonservice.Models.Review;

import java.util.List;

public interface ReviewRepositoryCustom {

//    Get review by tag
    List<Review> getReviewByTag(BusinessTag tag);

//    get reviews by host
    List<Review> getReviewByHost(Long id);


//
//    get review by type
    List<Review> getReviewByType(String type);
}

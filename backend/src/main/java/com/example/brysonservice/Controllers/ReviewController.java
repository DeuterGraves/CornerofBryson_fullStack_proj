package com.example.brysonservice.Controllers;

import com.example.brysonservice.Enums.BusinessTag;
import com.example.brysonservice.Models.Review;
import com.example.brysonservice.Repositories.ReviewRepository.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value="/api/reviews")
public class ReviewController {

    @Autowired
    ReviewRepository reviewRepository;

    @GetMapping(value = "/up")
    public List<Review> getAllReviews(){
        return reviewRepository.getAllReviews();
    }

    @GetMapping(value = "/tag/{tag}")
    public List<Review> getReviewByTag(@PathVariable BusinessTag tag){
        return reviewRepository.getReviewByTag(tag);
    }

    @GetMapping(value = "/host/{id}")
    public List<Review> getReviewByHost(@PathVariable Long id){
        return reviewRepository.getReviewByHost(id);
    }

    @GetMapping(value = "/type/{type}")
    public List<Review> getReviewByType(@PathVariable String type){
        return reviewRepository.getReviewByType(type);
    }


}

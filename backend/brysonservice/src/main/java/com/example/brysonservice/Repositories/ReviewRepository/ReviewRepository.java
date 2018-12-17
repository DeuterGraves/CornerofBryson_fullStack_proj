package com.example.brysonservice.Repositories.ReviewRepository;

import com.example.brysonservice.Models.Review;
import com.example.brysonservice.Projections.CustomReview;
//import com.example.brysonservice.Projections.UserProjection;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(excerptProjection = CustomReview.class)
public interface ReviewRepository extends JpaRepository<Review, Long>, ReviewRepositoryCustom {
}

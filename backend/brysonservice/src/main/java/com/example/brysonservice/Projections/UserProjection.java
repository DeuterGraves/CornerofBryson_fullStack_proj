package com.example.brysonservice.Projections;

import com.example.brysonservice.Enums.BusinessTag;
import com.example.brysonservice.Models.Business;
import com.example.brysonservice.Models.User;
import org.springframework.data.rest.core.config.Projection;

import java.util.List;

@Projection(name="embedUser", types = Business.class)
public interface UserProjection {
    Long getId();
    String getTitle();
    String getSummary();
    String getType();
    int getPrice();
    BusinessTag getTag();
    User getUser();
}

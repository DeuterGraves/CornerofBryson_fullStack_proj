package com.example.brysonservice.Repositories.BusinessRepository;

import com.example.brysonservice.Models.Business;
import com.example.brysonservice.Models.User;

import java.util.List;

public interface BusinessRepositoryCustom {

//    Get review by tag
    List<Business> getBusinessByTag(String tag);

//    get reviews by host
    List<Business> getBusinessByHost(Long id);

//    get reviews by cuisine
    List<Business> getBusinessByCuisine(String cuisine);
//
//    get review by type
    List<Business> getBusinessByType(String type);
}

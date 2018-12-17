package com.example.brysonservice.Components;


import com.example.brysonservice.Enums.BusinessTag;
import com.example.brysonservice.Models.*;
import com.example.brysonservice.Repositories.BusinessRepository.BusinessRepository;
import com.example.brysonservice.Repositories.UserRepository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    UserRepository userRepository;

    @Autowired
    BusinessRepository businessRepository;

    public DataLoader(){ }

    public void run(ApplicationArguments args){

        User user1 = new User("Caroline", "Host");
        userRepository.save(user1);

        User user2 = new User("Jamie", "Host");
        userRepository.save(user2);

        Business attraction1 = new Business("Edinburgh Castle", "Found on the top of a really big really old rock", "Castle", 15, BusinessTag.ATTRACTION, user1);
        businessRepository.save(attraction1);

        Business restaurant1 = new Business("El Cartel", "Best street style tacos in town", "Mexican", 14, BusinessTag.RESTAURANT, user2);
        businessRepository.save(restaurant1);

        Business restaurant2 = new Business("PieceBox", "Wonderful shabby chic cafe just around the corner.", "Cafe", 9, BusinessTag.RESTAURANT, user1);
        businessRepository.save(restaurant2);

        Business shop1 = new Business("Paper Tiger", "Cards and gifts with a local flare", "Gift", 0, BusinessTag.SHOP, user2);
        businessRepository.save(shop1);

        Business shop2 = new Business("Chocolate Tree", "Raw chocolate sourced all over the world, made into treats here in Scotland", "Gift", 0, BusinessTag.SHOP, user2);
        businessRepository.save(shop2);
    }

}

package com.example.brysonservice.Components;


import com.example.brysonservice.Models.Attraction;
import com.example.brysonservice.Models.Restaurant;
import com.example.brysonservice.Models.Shop;
import com.example.brysonservice.Models.User;
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

        Attraction attraction1 = new Attraction("Edinburgh Castle", "Found on the top of a really big really old rock", "Attraction", user1, 15);
        businessRepository.save(attraction1);

        Restaurant restaurant1 = new Restaurant("El Cartel", "Best street style tacos in town", "Restaurant", user2, 3, "Mexican");
        businessRepository.save(restaurant1);

        Restaurant restaurant2 = new Restaurant("PieceBox", "Wonderful shabby chic cafe just around the corner.", "Restaurant", user1, 2, "cafe");
        businessRepository.save(restaurant2);

        Shop shop1 = new Shop("Paper Tiger", "Cards and gifts with a local flare", "Shop", user1, "Gift");
        businessRepository.save(shop1);

        Shop shop2 = new Shop("Chocolate Tree", "Raw chocolate sourced all over the world, made into treats here in Scotland", "Shop", user2, "Gift");
    }

}

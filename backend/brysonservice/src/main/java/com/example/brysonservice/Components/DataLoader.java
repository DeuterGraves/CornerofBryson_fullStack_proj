package com.example.brysonservice.Components;


import com.example.brysonservice.Enums.BusinessTag;
import com.example.brysonservice.Models.*;
import com.example.brysonservice.Repositories.ReviewRepository.ReviewRepository;
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
    ReviewRepository reviewRepository;

    public DataLoader(){ }

    public void run(ApplicationArguments args){

        User user1 = new User("Caroline", "Host");
        userRepository.save(user1);

        User user2 = new User("Jamie", "Host");
        userRepository.save(user2);

        Review attraction1 = new Review("Edinburgh Castle", "Found on the top of a really big really old rock", "Castle", 15, BusinessTag.ATTRACTION, "/public/images/edinburgh_castle.jpg", "This is the review body. it's really long", "Castlehill, Edinburgh EH1 2NG", user1);
        reviewRepository.save(attraction1);

        Review restaurant1 = new Review("El Cartel", "Best street style tacos in town", "Mexican", 14, BusinessTag.RESTAURANT, "/public/images/el_cartel.jpg", "This is the review test. again, much longer than the summary.", "64 Thistle St, Edinburgh EH2 1EN", user2);
        reviewRepository.save(restaurant1);

        Review restaurant2 = new Review("PieceBox", "Wonderful shabby chic cafe just around the corner.", "Cafe", 9, BusinessTag.RESTAURANT, "/public/images/Piecebox_cafe.jpg", "We go here, don't have the pancakes or at least don't expect them to be pancakes - french toast either - if you're american.", "2 Polwarth Cres, Edinburgh EH11 1HW", user1);
        reviewRepository.save(restaurant2);

        Review shop1 = new Review("Paper Tiger", "Cards and gifts with a local flare", "Gift", 0, BusinessTag.SHOP, "/public/images/paper_tiger.jpg", "Great stuff can be bought here", "53 Lothian Rd, Edinburgh EH1 2DJ", user2);
        reviewRepository.save(shop1);

        Review shop2 = new Review("Chocolate Tree", "Raw chocolate sourced all over the world, made into treats here in Scotland", "Gift", 0, BusinessTag.SHOP, "/public/images/chocolate_tree.jpg", "Bean to bar chocolate and truffles yup this is a review", "123 Bruntsfield Pl, Edinburgh EH10 4EQ", user2);
        reviewRepository.save(shop2);
    }

}

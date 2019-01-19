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

    public void run(ApplicationArguments args) {

        User user1 = new User("Caroline", "Host");
        userRepository.save(user1);

        User user2 = new User("Jamie", "Host");
        userRepository.save(user2);

        Review attraction1 = new Review("Edinburgh Castle", "Found on the top of a really big really old rock", "Castle", 15, BusinessTag.ATTRACTION, "/images/edinburgh_castle.jpg", "You can easily spend a full day at the castle.  There are great views of the south of the city and the pentland hills, and the new town and Fife to the north.  The don't miss parts for us are:  1. The prisoners of war museum - Americans were imprisoned here during the American Revolution!     2. The Great Hall 3. The Scottish War Memorial 4. St Margaret's Chapel 5. The Royal Apartments", "Castlehill, Edinburgh EH1 2NG", user1);
        reviewRepository.save(attraction1);

        Review restaurant1 = new Review("El Cartel", "Best street style tacos in town", "Mexican", 14, BusinessTag.RESTAURANT, "/images/el_cartel.jpg", "Delicious street food style tacos.  A favorite of ours.  They get VERY busy - your best bet is a late lunch or an early dinner.  Try to hit just off peak or put your name on the list and have a drink across the street at the Bon Vivant while you wait.", "64 Thistle St, Edinburgh EH2 1EN", user2);
        reviewRepository.save(restaurant1);

        Review restaurant2 = new Review("PieceBox", "Wonderful shabby chic cafe just around the corner.", "Cafe", 9, BusinessTag.RESTAURANT, "/images/piecebox_cafe.jpg", "We go here, don't have the pancakes or at least don't expect them to be pancakes - french toast either - if you're american.", "2 Polwarth Cres, Edinburgh EH11 1HW", user1);
        reviewRepository.save(restaurant2);

        Review shop1 = new Review("Paper Tiger", "Cards and gifts with a local flare", "Gift", 0, BusinessTag.SHOP, "/images/paper_tiger.jpg", "Paper Tiger has tote bags and tea towels made with stylized prints of a map of Edinburgh made specifically for them.  They also carry Coco Chocolatier and Chocolate Tree chocolate bars - these are both Scottish brands (sometimes you can find haggis spice flavored chocolate!).  Great source for local gifts.", "53 Lothian Rd, Edinburgh EH1 2DJ", user2);
        reviewRepository.save(shop1);

        Review shop2 = new Review("Chocolate Tree", "Raw chocolate sourced all over the world, made into treats here in Scotland", "Gift", 0, BusinessTag.SHOP, "/images/chocolate_tree.jpg", "Chocolates, ice cream, and hot cocoa - oooh and coffee!  In addition to their chocolate bars, you can get their bonbons here (not at Paper Tiger) - sometimes they have 'day olds' by the till at a great price!", "123 Bruntsfield Pl, Edinburgh EH10 4EQ", user2);
        reviewRepository.save(shop2);


        Review shop3 = new Review("Sainsbury's Local", "Handy shop for staples right on the way to and from town.", "Grocery", 0, BusinessTag.SHOP, "/images/sainsburys_local.jpg", "The Saindbury's local on Dundee Street is convient for quick shops on the way into town or the way home from a day of sightseeing.  My favorite piece of advice to friends and family who visit - pick up a lunch meal deal for about £3 and pocket the savings to get a fancier dinner!", "81-85 Dundee Street", user1);
        reviewRepository.save(shop3);


        Review restaurant3 = new Review("Aizle", "Unique fine dining experience", "Scottish", 85, BusinessTag.RESTAURANT, "/images/aizle.jpg", "Aizle don't have a menu - just a list of ingredients, that changes monthly, let them know if you have any dietary requirements when you book and they will be sure to take good care of you.  This is a favorite of ours for special occaisions like birthdays!", "107-109 St. Leonard's St, Edinburgh EH8 9QY", user2);
        reviewRepository.save(restaurant3);

        Review attraction2 = new Review("Palace of Holyrood House", "The Queen stays here when she's in town.  Tour the palace and/or check out what's on at the gallery.", "Palace", 14, BusinessTag.ATTRACTION,  "/images/holyrood_house.jpg", "The palace offers a self paced audio tour through the building, highlights for me were the Mary Queen of Scots rooms and the walk through the abbey.  The cafe is lovely and especially with wee Maisie in tow (she was about 3 months old when my sister and I went to see the palace!) so convenient!  I haven't been to the gallery yet, but good exhibitions come through - it's worth checking what's on while you're in town.", "Bottom of royal mile", user1);
        reviewRepository.save(attraction2);

        Review restaurant4 = new Review("Preachers", "Great for breakfasts or lunch on the go.", "Cafe", 2, BusinessTag.RESTAURANT, "/images/preachers.jpg", "It doesn't look like much and there's only 2 tables, but this is my favourite spot for breakfast rolls (or bacon rolls - or whatever you fancy rolls).  I’ll never forget my mom’s excitement when she learned bacon rolls are an acceptable choice for lunch too!  I recommend to go as it can get busy - but if they have a table available - snag it!", "24-26 Lady Lawson Street", user1);
        reviewRepository.save(restaurant4);
    }

}

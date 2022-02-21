package edu.ben.SOJAZBackend.controller;

import edu.ben.SOJAZBackend.model.User_Food;
import edu.ben.SOJAZBackend.service.UserFoodService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "api/userfood")
public class UserFoodResource {

    @Autowired
    private final UserFoodService userFoodService;

    UserFoodResource(UserFoodService userFoodService) {
        this.userFoodService = userFoodService;
    }

    @GetMapping("/getusersfoods/{user_id}")
    public List<User_Food> getUsersFood(@PathVariable Long user_id) {
         return userFoodService.getAllFoodsConsumedByUser(user_id);
    }

    @GetMapping("/getall")
    public List<User_Food> getAll() {
        return userFoodService.getAll();
    }

    @GetMapping("/getallfoodsbyuser/{food_id}")
    public List<User_Food> getFoodsUsers(@PathVariable Long food_id) {
        return userFoodService.getAllUsersByFoodId(food_id);
    }

}

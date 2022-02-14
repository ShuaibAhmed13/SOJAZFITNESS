package edu.ben.SOJAZBackend.controller;

import edu.ben.SOJAZBackend.model.Food;
import edu.ben.SOJAZBackend.model.dto.FoodDTO;
import edu.ben.SOJAZBackend.service.FoodService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "api/food", produces = "application/json")
public class FoodResource {

    @Autowired
    private final FoodService foodService;

    public FoodResource(FoodService foodService){
        this.foodService = foodService;
    }

    @GetMapping("/getFoods")
    public List<Food> getFoods() {
        return foodService.getAllFoods();
    }

}

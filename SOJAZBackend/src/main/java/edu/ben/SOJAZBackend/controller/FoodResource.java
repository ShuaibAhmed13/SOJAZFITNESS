package edu.ben.SOJAZBackend.controller;

import edu.ben.SOJAZBackend.model.Food;
import edu.ben.SOJAZBackend.model.dto.FoodDTO;
import edu.ben.SOJAZBackend.service.FoodService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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

    @GetMapping("/getfoodbyid/{food_id}")
    public Food getFoodById(@PathVariable Long food_id) {
        return foodService.getFoodById(food_id);
    }

    @GetMapping("/getfoodbyname/{food_name}")
    public Food getFoodByName(@PathVariable String food_name) {
        return foodService.getFoodByName(food_name);
    }

    //Admin restricted requests
    @PostMapping("/crud/createfood")
    public ResponseEntity<String> createFood(@RequestBody Food food) {
        return new ResponseEntity<>(foodService.createFood(food), HttpStatus.CREATED);
    }

    @PutMapping("/crud/updatefood/{food_id}")
    public ResponseEntity<String> updateFood(@PathVariable Long food_id, @RequestBody Food food) {
        return new ResponseEntity<>(foodService.updateFood(food, food_id), HttpStatus.OK);
    }

    @DeleteMapping("/crud/deletefood/{food_id}")
    public ResponseEntity<String> deleteFood(@PathVariable Long food_id) {
        return new ResponseEntity<>(foodService.deleteFood(food_id), HttpStatus.OK);
    }
}

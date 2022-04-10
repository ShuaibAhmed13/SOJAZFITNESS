package edu.ben.SOJAZBackend.model.dto;

import edu.ben.SOJAZBackend.model.Food;
import edu.ben.SOJAZBackend.model.user;
import lombok.Data;

import java.time.LocalDate;
import java.util.Date;

@Data
public class UserFoodDTO {
    Long id;
    Food food;

    public UserFoodDTO(String meal, double noOfServings) {
        this.meal = meal;
        this.noOfServings = noOfServings;
    }

    user user;
    String meal;
    LocalDate date;
    double caloriesConsumed;
    double fatsConsumed;
    double carbsConsumed;
    double proteinConsumed;
    double sodiumConsumed;
    double sugarConsumed;
    double noOfServings;


    public UserFoodDTO() {

    }
}

package edu.ben.SOJAZBackend.model.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.ToString;

import javax.persistence.Column;

@Data
@ToString
@EqualsAndHashCode
@AllArgsConstructor
public class FoodDTO {

    Long id;
    String foodName;
    int calories;
    double totalFat;
    double satFats;
    double transFats;
    double cholesterol;
    double sodium;
    double totalCarbs;
    double dietaryFiber;
    double sugar;
    double protein;
    String servingSize;
}

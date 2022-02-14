package edu.ben.SOJAZBackend.model.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.ToString;

@Data
@ToString
@EqualsAndHashCode
@AllArgsConstructor
public class FoodDTO {

    Long id;
    String foodName;
    int calories;
    int carbs;
    int sodium;
    Integer totalFat;
    int protein;
    int sugar;
    String servingSize;
}

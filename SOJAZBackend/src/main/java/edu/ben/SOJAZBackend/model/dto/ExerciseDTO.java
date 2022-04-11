package edu.ben.SOJAZBackend.model.dto;

import edu.ben.SOJAZBackend.model.Muscle;
import edu.ben.SOJAZBackend.model.user;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.ToString;

import java.util.Set;

@Data
@ToString
@EqualsAndHashCode
@AllArgsConstructor
public class ExerciseDTO {
    Long id;
    String name;
    String description;
    String type;
    int caloriesBurned;

}

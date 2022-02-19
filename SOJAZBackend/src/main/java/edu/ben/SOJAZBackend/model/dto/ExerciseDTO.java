package edu.ben.SOJAZBackend.model.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.ToString;

@Data
@ToString
@EqualsAndHashCode
@AllArgsConstructor
public class ExerciseDTO {

    Long id;
    String workout;
    String workoutType;
    int sets;
    int reps;
    String intensity;

}

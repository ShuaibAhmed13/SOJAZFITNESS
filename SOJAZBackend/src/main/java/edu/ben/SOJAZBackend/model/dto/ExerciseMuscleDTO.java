package edu.ben.SOJAZBackend.model.dto;

import edu.ben.SOJAZBackend.model.Exercise;
import edu.ben.SOJAZBackend.model.Muscle;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.ToString;

@Data
@ToString
@EqualsAndHashCode
@AllArgsConstructor
public class ExerciseMuscleDTO {
    String exerciseName;
    String description;
    String type;
    String muscleName;
    String muscleGroup;
}

package edu.ben.SOJAZBackend.model.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.ToString;

import java.sql.Time;

@Data
@ToString
@EqualsAndHashCode
@AllArgsConstructor
public class ExerciseCardioDTO {
    Long id;
    String workoutCardio;
    String length;
    String intensity;

}

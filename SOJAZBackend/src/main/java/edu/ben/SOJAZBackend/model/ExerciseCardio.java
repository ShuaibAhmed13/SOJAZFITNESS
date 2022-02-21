package edu.ben.SOJAZBackend.model;

import lombok.*;

import javax.persistence.*;
import java.sql.Time;

@Entity
@ToString
@EqualsAndHashCode
@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
@Table(name = "exercise_cardio")
public class ExerciseCardio {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;
    @Column(name = "workout_cardio")
    String workout;
    @Column(name = "length")
    String length;
    @Column(name = "intensity")
    String intensity;

    public ExerciseCardio(String workout, String length, String intensity) {
        this.workout = workout;
        this.length = length;
        this.intensity = intensity;
    }
}

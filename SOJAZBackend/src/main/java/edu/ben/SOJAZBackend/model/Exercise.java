package edu.ben.SOJAZBackend.model;

import lombok.*;

import javax.persistence.*;

@Entity
@ToString
@EqualsAndHashCode
@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
@Table(name = "exercise")
public class Exercise {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;
    @Column(name = "workout")
    String workout;
    @Column(name = "sets")
    int sets;
    @Column(name = "reps")
    int reps;
    @Column(name = "intensity")
    String intensity;

    public Exercise(String workout, int sets, int reps, String intensity) {
        this.workout = workout;
        this.sets = sets;
        this.reps = reps;
        this.intensity = intensity;
    }
}

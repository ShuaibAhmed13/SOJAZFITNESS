package edu.ben.SOJAZBackend.model;

import lombok.*;

import javax.persistence.*;
import java.util.Set;

@Entity
@ToString
@EqualsAndHashCode
@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
@Table(name = "userweightdiary")
public class ExerciseWeight {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;
    @Column(name = "reps")
    int reps;
    @Column(name = "sets")
    int sets;
    @OneToMany
    @JoinColumn(name = "muscleID", referencedColumnName = "id")
    Set<Muscle> muscleID;
    /*@OneToMany
    @JoinColumn(name = "equipmentID", referencedColumnName = "id")
    int equipmentID;*/

    public ExerciseWeight(int reps, int sets) {
        this.reps = reps;
        this.sets = sets;
    }
}

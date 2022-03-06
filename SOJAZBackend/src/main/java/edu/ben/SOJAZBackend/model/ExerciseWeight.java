//package edu.ben.SOJAZBackend.model;
//
//import lombok.*;
//
//import javax.persistence.*;
//import java.util.Set;
//
//@Entity
//@ToString
//@EqualsAndHashCode
//@AllArgsConstructor
//@NoArgsConstructor
//@Data
//@Builder
//@Table(name = "userweightdiary")
//public class ExerciseWeight {
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    Long id;
//    @Column(name = "reps")
//    int reps;
//    @Column(name = "sets")
//    int sets;
//    @OneToMany
//    @JoinColumn(name = "muscleID", referencedColumnName = "id")
//    Set<Muscle> muscle;
//    @OneToMany
//    @JoinColumn(name = "equipmentID", referencedColumnName = "id")
//    Set<Equipment> equipment;
//    @OneToMany
//    @JoinColumn(name = "user", referencedColumnName = "id")
//    Set<user> user;
//
//    public ExerciseWeight(int reps, int sets) {
//        this.reps = reps;
//        this.sets = sets;
//    }
//}

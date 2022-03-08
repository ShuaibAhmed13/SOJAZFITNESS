//package edu.ben.SOJAZBackend.model;
//
//import lombok.*;
//
//import javax.persistence.*;
//import java.sql.Time;
//import java.util.Set;
//
//@Entity
//@ToString
//@EqualsAndHashCode
//@AllArgsConstructor
//@NoArgsConstructor
//@Data
//@Builder
//@Table(name = "usercardiodiary")
//public class ExerciseCardio {
//
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    Long id;
//    @Column(name = "time")
//    Time time;
//    @Column(name = "intensity")
//    String intensity;
//    @ManyToOne
//    @JoinColumn(name = "user", referencedColumnName = "id")
//    user user;
//
//    public ExerciseCardio(Time time, String intensity) {
//        this.time = time;
//        this.intensity = intensity;
//    }
//}

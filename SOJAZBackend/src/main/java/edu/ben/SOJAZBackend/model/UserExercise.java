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
@Table(name = "user_exercise")
public class UserExercise {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    Long id;

    //@Id
    //@Column(name = "food_id")
    @OneToOne
    @JoinColumn(name = "exercise", referencedColumnName = "id")
    //Long food_id;
    Exercise exercise;

    @OneToOne
    @JoinColumn(name = "user", referencedColumnName = "id")
    user user;

    @Column(name = "time_of_day")
    String timeOfDay;

    @Column(name = "number_of_minutes")
    double noOfMinutes;

    @Column(name = "sets")
    int sets;

    @Column(name = "reps")
    int reps;


    //@Id
    @Column(name = "total_calories_burned")
    double totalCaloriesBurned;

    public UserExercise(Exercise exercise, user user, String timeOfDay, double noOfMinutes, double totalCaloriesBurned) {
        this.exercise = exercise;
        this.user = user;
        this.timeOfDay = timeOfDay;
        this.noOfMinutes = noOfMinutes;
        this.totalCaloriesBurned = totalCaloriesBurned;
    }

    public UserExercise(Exercise exercise, user user, String timeOfDay, int sets, int reps) {
        this.exercise = exercise;
        this.user = user;
        this.timeOfDay = timeOfDay;
        this.sets = sets;
        this.reps = reps;
    }
}

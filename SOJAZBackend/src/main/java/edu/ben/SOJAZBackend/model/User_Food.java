package edu.ben.SOJAZBackend.model;

import lombok.*;
import org.apache.catalina.User;

import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDate;
import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

//@IdClass(User_FoodPK.class)
@Entity
@ToString
@EqualsAndHashCode
@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
@Table(name = "user_food")
public class User_Food {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;

    //@Id
    //@Column(name = "food_id")
    @OneToOne
    @JoinColumn(name = "food", referencedColumnName = "id")
    //Long food_id;
    Food food;

    //@Id
    //@Column(name = "user_id")
    @OneToOne
    @JoinColumn(name = "user", referencedColumnName = "id")
    //Long user_id;
    user user;

    //@Id
    @Column(name = "meal", nullable = false)
    String meal;

    //@Id
    @Column(name = "date", nullable = false)
    LocalDate date;

    @Column(name = "calories_consumed", nullable = false)
    double caloriesConsumed;

    @Column(name = "fat_consumed", nullable = false)
    double fatsConsumed;

    @Column(name = "carbs_consumed", nullable = false)
    double carbsConsumed;

    @Column(name = "protein_consumed", nullable = false)
    double proteinConsumed;

    @Column(name = "sodium_consumed", nullable = false)
    double sodiumConsumed;

    @Column(name = "sugar_consumed", nullable = false)
    double sugarConsumed;

    @Column(name = "number_of_servings", nullable = false)
    double noOfServings;


}
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
@Table(name = "food")
public class Food {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;
    @Column(name = "food_name")
    String foodName;
    @Column(name = "calories")
    int calories;
    @Column(name = "total_fat")
    double totalFat;
    @Column(name = "saturated_fats")
    double satFats;
    @Column(name = "trans_fats")
    double transFats;
    @Column(name = "cholesterol")
    double cholesterol;
    @Column(name = "sodium")
    double sodium;
    @Column(name = "total_carbs")
    double totalCarbs;
    @Column(name = "dietary_fiber")
    double dietaryFiber;
    @Column(name = "sugar")
    double sugar;
    @Column(name = "protein")
    double protein;
    @Column(name = "serving_size")
    String servingSize;
}

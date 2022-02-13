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
    @Column(name = "carbs")
    int carbs;
    @Column(name = "sodium")
    int sodium;
    @Column(name = "total_fat")
    Integer totalFat;
    @Column(name = "protein")
    int protein;
    @Column(name = "sugar")
    int sugar;
    @Column(name = "serving_size")
    String servingSize;
}

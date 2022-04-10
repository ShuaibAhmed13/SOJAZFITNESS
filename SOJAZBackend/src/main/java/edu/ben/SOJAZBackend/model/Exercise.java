package edu.ben.SOJAZBackend.model;

import lombok.*;
import org.springframework.jmx.export.annotation.ManagedMetric;

import javax.persistence.*;
import java.sql.Time;
import java.util.Set;

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
    @Column(name = "name")
    String name;
    @Column(name = "description")
    String description;
    @Column(name = "type")
    String type;
    @Column(name = "calories_burned")
    int caloriesBurned;
    @ManyToMany
    @JoinColumn(name = "muscles", referencedColumnName = "id")
    Set<Muscle> muscles;
    @ManyToMany
    @JoinColumn(name = "equipment", referencedColumnName = "id")
    Set<Equipment> equipments;

    public Exercise(String name, String description, String type, int caloriesBurned) {
        this.name = name;
        this.description = description;
        this.type = type;
        this.caloriesBurned = caloriesBurned;
    }
}

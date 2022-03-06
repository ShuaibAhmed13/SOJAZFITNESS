package edu.ben.SOJAZBackend.model;

import lombok.*;

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
@Table(name = "weightworkouts")
public class Exercise {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;
    @Column(name = "name")
    String name;
    @Column(name = "description")
    String description;

    public Exercise(String name, String description) {
        this.name = name;
        this.description = description;
    }
}

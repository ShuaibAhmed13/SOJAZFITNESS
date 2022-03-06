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
@Table(name = "muscles")
public class Muscle {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;
    @Column(name = "name")
    String muscleName;
    @Column(name = "musclegroup")
    String muscleGroup;
}

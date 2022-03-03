package edu.ben.SOJAZBackend.model.dto;
import edu.ben.SOJAZBackend.model.user;
import edu.ben.SOJAZBackend.model.Equipment;
import edu.ben.SOJAZBackend.model.Muscle;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.ToString;

import java.util.Set;

@Data
@ToString
@EqualsAndHashCode
@AllArgsConstructor
public class ExerciseWeightDTO {
    Long id;
    int sets;
    int reps;
    Set<Muscle> muscle;
    Set<Equipment> equipment;
    Set<user> user;
}

package edu.ben.SOJAZBackend.model.dto;
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

public class EquipmentDTO {
    Long id;
    String equipmentName;
    String equipmentType;

}

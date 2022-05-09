package edu.ben.SOJAZBackend.model.dto;

import edu.ben.SOJAZBackend.model.user;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.ToString;

@Data
@ToString
@EqualsAndHashCode
@AllArgsConstructor
public class userProfileDTO {
    Long id;
    Double currenWeight;
    Double goalWeight;
    String lifestyle;
    Double height;
    Double currentCalories;
    Double goalCalories;
    String sex;
    user user;

}

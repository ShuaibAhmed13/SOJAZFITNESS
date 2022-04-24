package edu.ben.SOJAZBackend.model.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.ToString;

@Data
@ToString
@EqualsAndHashCode
@AllArgsConstructor
public class userDTO {

    Long id;
    String email;
    String username;
    String firstName;
    String lastName;
    String password;
    Boolean active;
    String roles;
    String resetPasswordToken;


    public userDTO(Long id, String email, String username, String firstName, String lastName, String roles, String resetPasswordToken) {
        this.id = id;
        this.email = email;
        this.username = username;
        this.firstName = firstName;
        this.lastName = lastName;
        this.roles = roles;
        this.resetPasswordToken = resetPasswordToken;

    }

    public userDTO (String email, String username, String firstName, String lastName, String password) {
        this.email = email;
        this.username = username;
        this.firstName = firstName;
        this.lastName = lastName;
        this.password = password;
    }
    public userDTO(String username, String password) {
        this.username = username;
        this.password = password;
    }

    public userDTO(String username) {
        this.username = username;
    }

    public userDTO(){}

    public userDTO(Long id, String email, String username, String firstName, String lastName, Boolean active, String roles, String resetPasswordToken) {
        this.id = id;
        this.email = email;
        this.username = username;
        this.firstName = firstName;
        this.lastName = lastName;
        this.active = active;
        this.roles = roles;
        this.resetPasswordToken = resetPasswordToken;

    }
}

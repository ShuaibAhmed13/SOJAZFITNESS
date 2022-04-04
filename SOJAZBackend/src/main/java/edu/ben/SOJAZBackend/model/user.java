package edu.ben.SOJAZBackend.model;

import lombok.*;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@ToString
@EqualsAndHashCode
@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
@Table(name = "user")
public class user implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;
    @Column(name = "email", unique = true)
    String email;
    @Column(name = "username", unique = true)
    String username;
    @Column(name = "first_name")
    String firstName;
    @Column(name = "last_name")
    String lastName;
    @Column(name = "password")
    String password;
    @Column(name = "active")
    Boolean active;
    @Column(name = "ROLES")
    String roles;
    @Column(name = "email_token", unique = true)
    String emailToken;

    public user(Long id, String email, String username, String firstName, String lastName, String password, String emailToken) {
        this.id = id;
        this.email = email;
        this.username = username;
        this.firstName = firstName;
        this.lastName = lastName;
        this.password = password;
        this.active = true;
        this.roles = "ROLE_USER";
        this.emailToken = emailToken;

    }

    public user(String email, String username, String firstName, String lastName, String password, String emailToken) {
        this.email = email;
        this.username = username;
        this.firstName = firstName;
        this.lastName = lastName;
        this.password = password;
        this.active = true;
        this.roles = "ROLE_USER";
        this.emailToken = emailToken;

    }

    public user(String email, String username, String firstName, String lastName, String password, Boolean active, String roles, String emailToken) {
        this.email = email;
        this.username = username;
        this.firstName = firstName;
        this.lastName = lastName;
        this.password =password;
        this.active = true;
        this.roles = "ROLE_USER";
        this.emailToken = emailToken;
    }
}

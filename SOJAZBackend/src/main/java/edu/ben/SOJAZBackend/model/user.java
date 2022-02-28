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

    public user(Long id, String email, String username, String firstName, String lastName, String password) {
        this.id = id;
        this.email = email;
        this.username = username;
        this.firstName = firstName;
        this.lastName = lastName;
        this.password = password;
        this.active = true;
        this.roles = "ROLE_USER";
    }

    public user(String email, String username, String firstName, String lastName, String password) {
        this.email = email;
        this.username = username;
        this.firstName = firstName;
        this.lastName = lastName;
        this.password = password;
        this.active = true;
        this.roles = "ROLE_USER";
    }

    public user(String email, String username, String firstName, String lastName, String password, Boolean active, String roles) {
        this.email = email;
        this.username = username;
        this.firstName = firstName;
        this.lastName = lastName;
        this.password =password;
        this.active = true;
        this.roles = "ROLE_USER";
    }
}

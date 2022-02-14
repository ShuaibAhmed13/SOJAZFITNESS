package edu.ben.SOJAZBackend.Entity;

import lombok.*;
import org.hibernate.Hibernate;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Table(name = "users")
public class User {

    @Id
    @Column(length = 20)
    private String email;
    @Column(unique = true, nullable = false, length = 20)
    private String username;
    @Column(nullable = false, length = 20)
    private String firstname;
    @Column(nullable = false, length = 20)
    private String lastname;
    @Column(nullable = false, length = 20)
    private String password;

}
package edu.ben.SOJAZBackend.model;

import lombok.*;

import javax.persistence.*;

@Entity
@ToString
@EqualsAndHashCode
@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
@Table(name = "userProfile")
public class UserProfileModel {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    Long id;
    @Column (name= "current_weight")
    Double currentWeight;
    @Column (name= "goal_weight")
    Double goalWeight;
    @Column (name= "lifestyle")
    String lifestyle;
    @Column (name= "height")
    Double Height;
    @Column (name= "current_calories")
    Double currentCalories;
    @Column (name= "goal_calories")
    Double goalCalories;
    @Column (name= "sex")
    String sex;
    @OneToOne
    @JoinColumn(name="user", referencedColumnName = "id")
    user user;

}

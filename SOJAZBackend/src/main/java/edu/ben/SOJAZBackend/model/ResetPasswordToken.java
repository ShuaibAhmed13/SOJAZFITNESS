package edu.ben.SOJAZBackend.model;
import javax.persistence.*;
import java.util.Calendar;
import java.util.Date;

@Entity
public class ResetPasswordToken {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column (nullable = false, unique = true)
    private String token;

    @OneToOne(targetEntity = user.class, fetch = FetchType.EAGER)
    @JoinColumn(nullable = false, name = "user_id")
    private user user;

    @Column(nullable = false)
    private Date expiryDate;

    public Long getId() {
        return id;
    }

    public void setId(Long id){
        this.id = id;
    }

    public String getToken(){
        return token;
    }

    public void setToken(String token){
        this.token = token;
    }

    public user getUser(){
        return user;
    }

    public void setUser(user User){
        this.user = User;
    }

    public Date getExpiryDate(){
        return expiryDate;
    }

    public void setExpiryDate(Date expiryDate){
        this.expiryDate = expiryDate;
    }

    public void setExpiryDate(int minutes){
        Calendar now = Calendar.getInstance();
        now.add(Calendar.MINUTE, minutes);
        this.expiryDate = now.getTime();
    }

    public boolean isExpired() {
        return new Date().after(this.expiryDate);
    }


}

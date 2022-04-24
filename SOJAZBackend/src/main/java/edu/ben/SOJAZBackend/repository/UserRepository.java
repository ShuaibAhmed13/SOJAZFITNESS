package edu.ben.SOJAZBackend.repository;

import edu.ben.SOJAZBackend.model.user;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<user, Long> {

    Optional <user> findByUsername(String username);

    List<user> findAll();
    
    user getByEmail(String email);


    boolean existsByEmail(String email);

    boolean existsByUsername(String username);

   // boolean getActiveByUsername(String username);

    user getByUsername(String username);

    @Query("SELECT c FROM user c WHERE c.email = ?1")
   user findByEmail(String email);

   user findByResetPasswordToken(String token);
}

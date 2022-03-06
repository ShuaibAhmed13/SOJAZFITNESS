package edu.ben.SOJAZBackend.repository;

import edu.ben.SOJAZBackend.model.user;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<user, Long> {

    Optional <user> findByUsername(String username);

    List<user> findAll();
    
    user getByEmail(String email);


}

package edu.ben.SOJAZBackend.repository;

import edu.ben.SOJAZBackend.model.Food;
import edu.ben.SOJAZBackend.model.user;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<user, Long> {

    public user findByUsername(String username);

    List<user> findAll();
}

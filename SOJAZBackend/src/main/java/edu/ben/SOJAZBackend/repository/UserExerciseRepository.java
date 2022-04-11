package edu.ben.SOJAZBackend.repository;

import edu.ben.SOJAZBackend.model.Muscle;
import edu.ben.SOJAZBackend.model.UserExercise;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserExerciseRepository extends JpaRepository<UserExercise, Long> {
    public List<UserExercise> findAllByUserId(Long user_id);
}

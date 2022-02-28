package edu.ben.SOJAZBackend.repository;

import edu.ben.SOJAZBackend.model.ExerciseMuscle;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ExerciseMuscleRepository extends JpaRepository<ExerciseMuscle, Long> {
    
}

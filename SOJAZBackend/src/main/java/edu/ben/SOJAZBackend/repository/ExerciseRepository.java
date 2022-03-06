package edu.ben.SOJAZBackend.repository;

import edu.ben.SOJAZBackend.model.Exercise;
import edu.ben.SOJAZBackend.model.ExerciseWeight;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ExerciseRepository extends JpaRepository<Exercise, Long> {
    public List<Exercise> findAllByName(String name);
}

package edu.ben.SOJAZBackend.repository;

import edu.ben.SOJAZBackend.model.Muscle;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface MuscleRepository extends JpaRepository<Muscle, Long> {
    public Optional<Muscle> findById(Long id);

    public List<Muscle> findAllByMuscleName(String muscle);

}

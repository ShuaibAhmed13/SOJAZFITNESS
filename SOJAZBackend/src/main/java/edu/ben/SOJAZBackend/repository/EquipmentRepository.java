package edu.ben.SOJAZBackend.repository;

import edu.ben.SOJAZBackend.model.Equipment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EquipmentRepository extends JpaRepository<Equipment, Long> {
    public Equipment getEquipmentByName(String equipment_name);
}

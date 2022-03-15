package edu.ben.SOJAZBackend.controller;

import edu.ben.SOJAZBackend.model.Equipment;
import edu.ben.SOJAZBackend.service.EquipmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "api/equipment")
public class EquipmentResource {

    @Autowired
    EquipmentService equipmentService;

    @GetMapping("/getallequipment")
    public List<Equipment> getAllEquipment() {
        return equipmentService.getAllEquipment();
    }

    @GetMapping("/getequipmenbyid/{equipment_id}")
    public Equipment getEquipmentById(@PathVariable Long equipment_id) {
        return equipmentService.getEquipmentById(equipment_id);
    }

    @GetMapping("/getequipmentbyname/{equipment_name}")
    public Equipment getEquipmentByName(@PathVariable String equipment_name) {
        return equipmentService.getEquipmentByName(equipment_name);
    }
    @GetMapping("/getequipment/{equipmentName}")
    public List<Object>getExerciseByEquipmentName(@PathVariable String equipmentName){
        return equipmentService.findAllExercisesByEquipmentName(equipmentName);

    }

    //Admin restricted requests

    @PostMapping("/crud/createequipment")
    public ResponseEntity<String> createEquipment(@RequestBody Equipment equipment) {
        return new ResponseEntity<>(equipmentService.createEquipment(equipment), HttpStatus.CREATED);
    }

    @PutMapping("/crud/updateequipment/{equipment_id}")
    public ResponseEntity<String> updateEquipment(@PathVariable Long equipment_id, @RequestBody Equipment equipment) {
        return new ResponseEntity<>(equipmentService.updateEquipment(equipment, equipment_id), HttpStatus.OK);
    }

    @DeleteMapping("/crud/deleteequipment/{equipment_id}")
    public ResponseEntity<String> deleteEquipment(@PathVariable Long equipment_id) {
        return new ResponseEntity<>(equipmentService.deleteEquipment(equipment_id), HttpStatus.OK);
    }
}

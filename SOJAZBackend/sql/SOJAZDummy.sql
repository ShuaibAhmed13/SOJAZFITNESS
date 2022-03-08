-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema sojazdummyschema
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema sojazdummyschema
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `sojazdummyschema` DEFAULT CHARACTER SET utf8 ;
USE `sojazdummyschema` ;

-- -----------------------------------------------------
-- Table `sojazdummyschema`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sojazdummyschema`.`user` (
  `id` BIGINT NOT NULL auto_increment,
  `username` VARCHAR(45) NOT NULL,
  `email` VARCHAR(255) NULL DEFAULT NULL,
  `first_name` VARCHAR(255) NULL DEFAULT NULL,
  `last_name` VARCHAR(255) NULL DEFAULT NULL,
  `password` VARCHAR(255) NULL DEFAULT NULL,
  `active` BIT(1) NULL DEFAULT NULL,
  `roles` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `sojazdummyschema`.`muscles`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sojazdummyschema`.`muscles` (
  `id` BIGINT NOT NULL auto_increment,
  `name` VARCHAR(45) NOT NULL,
  `musclegroup` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `sojazdummyschema`.`weightworkouts`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sojazdummyschema`.`weightworkouts` (
  `id` BIGINT NOT NULL auto_increment,
  `name` VARCHAR(45) NOT NULL,
  `description` VARCHAR(45) NOT NULL,
  `muscleID` BIGINT NOT NULL,
  `equipmentID` BIGINT NOT NULL,
  `user` BIGINT NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `muscleID_idx` (`muscleID` ASC) VISIBLE,
  INDEX `equipmentID_idx` (`equipmentID` ASC) VISIBLE,
  INDEX `user` (`user` ASC) VISIBLE,
  CONSTRAINT `equipmentID`
    FOREIGN KEY (`equipmentID`)
    REFERENCES `sojazdummyschema`.`equipment` (`id`),
  CONSTRAINT `user`
    FOREIGN KEY (`user`)
    REFERENCES `sojazdummyschema`.`user` (`id`),
  CONSTRAINT `muscleID`
    FOREIGN KEY (`muscleID`)
    REFERENCES `sojazdummyschema`.`muscles` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `sojazdummyschema`.`userweightdiary`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sojazdummyschema`.`userweightdiary` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `reps` INT NULL DEFAULT NULL,
  `sets` INT NULL DEFAULT NULL,
  `weightworkoutID` BIGINT NOT NULL,
  `weightuserID` BIGINT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `weightworkoutID_idx` (`weightworkoutID` ASC) VISIBLE,
  CONSTRAINT `weightuserID`
    FOREIGN KEY (`weightuserID`)
    REFERENCES `sojazdummyschema`.`user` (`id`),
  CONSTRAINT `weightworkoutID`
    FOREIGN KEY (`weightworkoutID`)
    REFERENCES `sojazdummyschema`.`weightworkouts` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `sojazdummyschema`.`equipment`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sojazdummyschema`.`equipment` (
  `id` BIGINT NOT NULL auto_increment,
  `name` VARCHAR(45) NOT NULL,
  `type` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;

-- -----------------------------------------------------
-- Table `sojazdummyschema`.`cardioworkouts`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sojazdummyschema`.`cardioworkouts` (
  `id` BIGINT NOT NULL auto_increment,
  `name` VARCHAR(45) NOT NULL,
  `description` VARCHAR(45) NOT NULL,
  `cardioequipmentID` BIGINT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `cardioequipmentID_idx` (`cardioequipmentID` ASC) VISIBLE,
  CONSTRAINT `cardioequipmentID`
    FOREIGN KEY (`cardioequipmentID`)
    REFERENCES `sojazdummyschema`.`equipment` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;

-- -----------------------------------------------------
-- Table `sojazdummyschema`.`food`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sojazdummyschema`.`food` (
  `id` INT NOT NULL auto_increment,
  `food_name` VARCHAR(45) NOT NULL,
  `calories` INT NOT NULL,
  `carbs` INT NOT NULL,
  `sodium` INT NOT NULL,
  `total_fat` INT NOT NULL,
  `protein` INT NOT NULL,
  `sugar` INT NOT NULL,
  `serving_size` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `sojazdummyschema`.`hibernate_sequence`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sojazdummyschema`.`hibernate_sequence` (
  `next_val` BIGINT NULL DEFAULT NULL)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `sojazdummyschema`.`user_food`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sojazdummyschema`.`user_food` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `calories_consumed` INT NOT NULL,
  `carbs_consumed` INT NOT NULL,
  `date` DATETIME(6) NOT NULL,
  `fat_consumed` INT NOT NULL,
  `meal` VARCHAR(255) NOT NULL,
  `number_of_servings` INT NOT NULL,
  `protein_consumed` INT NOT NULL,
  `sodium_consumed` INT NOT NULL,
  `sugar_consumed` INT NOT NULL,
  `food` BIGINT NULL DEFAULT NULL,
  `user` BIGINT NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `FK47cwpks4gp3af05w8m7dwhfw2` (`user` ASC) VISIBLE,
  CONSTRAINT `FK47cwpks4gp3af05w8m7dwhfw2`
    FOREIGN KEY (`user`)
    REFERENCES `sojazdummyschema`.`user` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `sojazdummyschema`.`usercardiodiary`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sojazdummyschema`.`usercardiodiary` (
  `id` BIGINT NOT NULL auto_increment,
  `time` TIME NULL DEFAULT NULL,
  `distance` DOUBLE NULL DEFAULT NULL,
  `intensity` VARCHAR(10) NULL DEFAULT NULL,
  `userID` BIGINT NULL DEFAULT NULL,
  `workoutID` BIGINT NULL DEFAULT NULL,
  `user` BIGINT NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `userID_idx` (`userID` ASC) VISIBLE,
  INDEX `workoutID_idx` (`workoutID` ASC) VISIBLE,
  INDEX `FKsbso7iq8to5x80edpirh3rsqu` (`user` ASC) VISIBLE,
  CONSTRAINT `FKsbso7iq8to5x80edpirh3rsqu`
    FOREIGN KEY (`user`)
    REFERENCES `sojazdummyschema`.`user` (`id`),
  CONSTRAINT `userID`
    FOREIGN KEY (`userID`)
    REFERENCES `sojazdummyschema`.`user` (`id`),
  CONSTRAINT `workoutID`
    FOREIGN KEY (`workoutID`)
    REFERENCES `sojazdummyschema`.`cardioworkouts` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;


INSERT INTO `user` VALUES ('1', 'dummy1', 'dummy@gmail.com', 'Dummy', 'One', 'aaaa1111', 0, 'member');
INSERT INTO `Food` VALUES ('1','Chicken','300', '12', '7', '5', '5', '2', '1'), ('2', 'NY Strip Steak', '400', '18', '9', '3', '3', '2', '1'), ('3', 'Rice', '200', '15', '7', '1', '1', '1', '1'), ('4', 'Spaghetti & Meatballs', '700', '20', '12', '15', '12', '4', '1'), ('5', 'Peanut Butter', '150', '18', '9', '2', '2', '3', '1');
INSERT INTO `muscles` VALUES ('1', 'Chest', 'Upper Body');
INSERT INTO `equipment` VALUES ('1', 'Bar', 'Metal');
=======
# -- MySQL Workbench Forward Engineering
#
# SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
# SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
# SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
#
# -- -----------------------------------------------------
# -- Schema mydb
# -- -----------------------------------------------------
# -- -----------------------------------------------------
# -- Schema sojazdummyschema
# -- -----------------------------------------------------
#
# -- -----------------------------------------------------
# -- Schema sojazdummyschema
# -- -----------------------------------------------------
# CREATE SCHEMA IF NOT EXISTS `sojazdummyschema` DEFAULT CHARACTER SET utf8 ;
# USE `sojazdummyschema` ;
#
# -- -----------------------------------------------------
# -- Table `sojazdummyschema`.`user`
# -- -----------------------------------------------------
# CREATE TABLE IF NOT EXISTS `sojazdummyschema`.`user` (
#   `id` BIGINT NOT NULL auto_increment,
#   `username` VARCHAR(45) NOT NULL,
#   `email` VARCHAR(255) NULL DEFAULT NULL,
#   `first_name` VARCHAR(255) NULL DEFAULT NULL,
#   `last_name` VARCHAR(255) NULL DEFAULT NULL,
#   `password` VARCHAR(255) NULL DEFAULT NULL,
#   `active` BIT(1) NULL DEFAULT NULL,
#   `roles` VARCHAR(255) NULL DEFAULT NULL,
#   PRIMARY KEY (`id`))
# ENGINE = InnoDB
# DEFAULT CHARACTER SET = utf8mb3;
#
#
# -- -----------------------------------------------------
# -- Table `sojazdummyschema`.`muscles`
# -- -----------------------------------------------------
# CREATE TABLE IF NOT EXISTS `sojazdummyschema`.`muscles` (
#   `id` BIGINT NOT NULL auto_increment,
#   `name` VARCHAR(45) NOT NULL,
#   `musclegroup` VARCHAR(45) NOT NULL,
#   PRIMARY KEY (`id`))
# ENGINE = InnoDB
# DEFAULT CHARACTER SET = utf8mb3;
#
#
# -- -----------------------------------------------------
# -- Table `sojazdummyschema`.`weightworkouts`
# -- -----------------------------------------------------
# CREATE TABLE IF NOT EXISTS `sojazdummyschema`.`weightworkouts` (
#   `id` BIGINT NOT NULL auto_increment,
#   `name` VARCHAR(45) NOT NULL,
#   `description` VARCHAR(45) NOT NULL,
#   `muscleID` BIGINT NOT NULL,
#   `equipmentID` BIGINT NOT NULL,
#   `user` BIGINT NULL DEFAULT NULL,
#   PRIMARY KEY (`id`),
#   INDEX `muscleID_idx` (`muscleID` ASC) VISIBLE,
#   INDEX `equipmentID_idx` (`equipmentID` ASC) VISIBLE,
#   INDEX `user` (`user` ASC) VISIBLE,
#   CONSTRAINT `equipmentID`
#     FOREIGN KEY (`equipmentID`)
#     REFERENCES `sojazdummyschema`.`equipment` (`id`),
#   CONSTRAINT `user`
#     FOREIGN KEY (`user`)
#     REFERENCES `sojazdummyschema`.`user` (`id`),
#   CONSTRAINT `muscleID`
#     FOREIGN KEY (`muscleID`)
#     REFERENCES `sojazdummyschema`.`muscles` (`id`))
# ENGINE = InnoDB
# DEFAULT CHARACTER SET = utf8mb3;
#
#
# -- -----------------------------------------------------
# -- Table `sojazdummyschema`.`userweightdiary`
# -- -----------------------------------------------------
# CREATE TABLE IF NOT EXISTS `sojazdummyschema`.`userweightdiary` (
#   `id` BIGINT NOT NULL AUTO_INCREMENT,
#   `reps` INT NULL DEFAULT NULL,
#   `sets` INT NULL DEFAULT NULL,
#   `weightworkoutID` BIGINT NOT NULL,
#   `weightuserID` BIGINT NOT NULL,
#   PRIMARY KEY (`id`),
#   INDEX `weightworkoutID_idx` (`weightworkoutID` ASC) VISIBLE,
#   CONSTRAINT `weightuserID`
#     FOREIGN KEY (`weightuserID`)
#     REFERENCES `sojazdummyschema`.`user` (`id`),
#   CONSTRAINT `weightworkoutID`
#     FOREIGN KEY (`weightworkoutID`)
#     REFERENCES `sojazdummyschema`.`weightworkouts` (`id`))
# ENGINE = InnoDB
# DEFAULT CHARACTER SET = utf8mb3;
#
#
# -- -----------------------------------------------------
# -- Table `sojazdummyschema`.`equipment`
# -- -----------------------------------------------------
# CREATE TABLE IF NOT EXISTS `sojazdummyschema`.`equipment` (
#   `id` BIGINT NOT NULL auto_increment,
#   `name` VARCHAR(45) NOT NULL,
#   `type` VARCHAR(45) NOT NULL,
#   PRIMARY KEY (`id`))
# ENGINE = InnoDB
# DEFAULT CHARACTER SET = utf8mb3;
#
# -- -----------------------------------------------------
# -- Table `sojazdummyschema`.`cardioworkouts`
# -- -----------------------------------------------------
# CREATE TABLE IF NOT EXISTS `sojazdummyschema`.`cardioworkouts` (
#   `id` BIGINT NOT NULL auto_increment,
#   `name` VARCHAR(45) NOT NULL,
#   `description` VARCHAR(45) NOT NULL,
#   `cardioequipmentID` BIGINT NOT NULL,
#   PRIMARY KEY (`id`),
#   INDEX `cardioequipmentID_idx` (`cardioequipmentID` ASC) VISIBLE,
#   CONSTRAINT `cardioequipmentID`
#     FOREIGN KEY (`cardioequipmentID`)
#     REFERENCES `sojazdummyschema`.`equipment` (`id`))
# ENGINE = InnoDB
# DEFAULT CHARACTER SET = utf8mb3;
#
# -- -----------------------------------------------------
# -- Table `sojazdummyschema`.`food`
# -- -----------------------------------------------------
# CREATE TABLE IF NOT EXISTS `sojazdummyschema`.`food` (
#   `id` INT NOT NULL auto_increment,
#   `food_name` VARCHAR(45) NOT NULL,
#   `calories` INT NOT NULL,
#   `carbs` INT NOT NULL,
#   `sodium` INT NOT NULL,
#   `total_fat` INT NOT NULL,
#   `protein` INT NOT NULL,
#   `sugar` INT NOT NULL,
#   `serving_size` VARCHAR(45) NOT NULL,
#   PRIMARY KEY (`id`))
# ENGINE = InnoDB
# DEFAULT CHARACTER SET = utf8mb3;
#
#
# -- -----------------------------------------------------
# -- Table `sojazdummyschema`.`hibernate_sequence`
# -- -----------------------------------------------------
# CREATE TABLE IF NOT EXISTS `sojazdummyschema`.`hibernate_sequence` (
#   `next_val` BIGINT NULL DEFAULT NULL)
# ENGINE = InnoDB
# DEFAULT CHARACTER SET = utf8mb3;
#
#
# -- -----------------------------------------------------
# -- Table `sojazdummyschema`.`user_food`
# -- -----------------------------------------------------
# CREATE TABLE IF NOT EXISTS `sojazdummyschema`.`user_food` (
#   `id` BIGINT NOT NULL AUTO_INCREMENT,
#   `calories_consumed` INT NOT NULL,
#   `carbs_consumed` INT NOT NULL,
#   `date` DATETIME(6) NOT NULL,
#   `fat_consumed` INT NOT NULL,
#   `meal` VARCHAR(255) NOT NULL,
#   `number_of_servings` INT NOT NULL,
#   `protein_consumed` INT NOT NULL,
#   `sodium_consumed` INT NOT NULL,
#   `sugar_consumed` INT NOT NULL,
#   `food` BIGINT NULL DEFAULT NULL,
#   `user` BIGINT NULL DEFAULT NULL,
#   PRIMARY KEY (`id`),
#   INDEX `FK47cwpks4gp3af05w8m7dwhfw2` (`user` ASC) VISIBLE,
#   CONSTRAINT `FK47cwpks4gp3af05w8m7dwhfw2`
#     FOREIGN KEY (`user`)
#     REFERENCES `sojazdummyschema`.`user` (`id`))
# ENGINE = InnoDB
# DEFAULT CHARACTER SET = utf8mb3;
#
#
# -- -----------------------------------------------------
# -- Table `sojazdummyschema`.`usercardiodiary`
# -- -----------------------------------------------------
# CREATE TABLE IF NOT EXISTS `sojazdummyschema`.`usercardiodiary` (
#   `id` BIGINT NOT NULL auto_increment,
#   `time` TIME NULL DEFAULT NULL,
#   `distance` DOUBLE NULL DEFAULT NULL,
#   `intensity` VARCHAR(10) NULL DEFAULT NULL,
#   `userID` BIGINT NULL DEFAULT NULL,
#   `workoutID` BIGINT NULL DEFAULT NULL,
#   `user` BIGINT NULL DEFAULT NULL,
#   PRIMARY KEY (`id`),
#   INDEX `userID_idx` (`userID` ASC) VISIBLE,
#   INDEX `workoutID_idx` (`workoutID` ASC) VISIBLE,
#   INDEX `FKsbso7iq8to5x80edpirh3rsqu` (`user` ASC) VISIBLE,
#   CONSTRAINT `FKsbso7iq8to5x80edpirh3rsqu`
#     FOREIGN KEY (`user`)
#     REFERENCES `sojazdummyschema`.`user` (`id`),
#   CONSTRAINT `userID`
#     FOREIGN KEY (`userID`)
#     REFERENCES `sojazdummyschema`.`user` (`id`),
#   CONSTRAINT `workoutID`
#     FOREIGN KEY (`workoutID`)
#     REFERENCES `sojazdummyschema`.`cardioworkouts` (`id`))
# ENGINE = InnoDB
# DEFAULT CHARACTER SET = utf8mb3;
#
#
# SET SQL_MODE=@OLD_SQL_MODE;
# SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
# SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
#
#
# INSERT INTO `User` VALUES ('1', 'dummy1', 'dummy@gmail.com', 'Dummy', 'One', 'aaaa1111', 0, 'member');
# INSERT INTO `Food` VALUES ('1','Chicken','300', '12', '7', '5', '5', '2', '1'), ('2', 'NY Strip Steak', '400', '18', '9', '3', '3', '2', '1'), ('3', 'Rice', '200', '15', '7', '1', '1', '1', '1'), ('4', 'Spaghetti & Meatballs', '700', '20', '12', '15', '12', '4', '1'), ('5', 'Peanut Butter', '150', '18', '9', '2', '2', '3', '1');
# INSERT INTO `muscles` VALUES ('1', 'Chest', 'Upper Body');
# INSERT INTO `equipment` VALUES ('1', 'Bar', 'Metal');


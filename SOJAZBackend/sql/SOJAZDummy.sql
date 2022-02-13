-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `sojazdummyschema` DEFAULT CHARACTER SET utf8 ;
-- -----------------------------------------------------
-- Schema sojazdummyschema
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema sojazdummyschema
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `sojazdummyschema` DEFAULT CHARACTER SET utf8 ;
USE `sojazdummyschema` ;

-- -----------------------------------------------------
-- Table `sojazdummyschema`.`food`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sojazdummyschema`.`food` (
  `id` INT NOT NULL,
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
-- Table `sojazdummyschema`.`food_consumed`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sojazdummyschema`.`food_consumed` (
  `idUser` INT NOT NULL,
  `idFood` INT NOT NULL,
  `meal` INT NOT NULL,
  `caloriesCounted` INT NOT NULL,
  `fatsConsumed` INT NOT NULL,
  `carbsConsumed` INT NOT NULL,
  `proteinsConsumed` INT NOT NULL,
  `sodiumConsumed` INT NOT NULL,
  `sugarConsumed` INT NOT NULL,
  `noOfServings` INT NOT NULL,
  PRIMARY KEY (`idUser`, `idFood`),
  INDEX `idFood_idx` (`idFood` ASC) VISIBLE,
  CONSTRAINT `idFood`
    FOREIGN KEY (`idFood`)
    REFERENCES `mydb`.`food` (`idFood`),
  CONSTRAINT `idUser`
    FOREIGN KEY (`idUser`)
    REFERENCES `mydb`.`user` (`idUser`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `sojazdummyschema`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sojazdummyschema`.`user` (
  `id` INT NOT NULL,
  `username` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;




INSERT INTO `User` VALUES ('1', 'Dummy');
INSERT INTO `Food` VALUES ('1','Chicken','300', '12', '7', '5', '5', '2', '1'), ('2', 'NY Strip Steak', '400', '18', '9', '3', '3', '2', '1'), ('3', 'Rice', '200', '15', '7', '1', '1', '1', '1'), ('4', 'Spaghetti & Meatballs', '700', '20', '12', '15', '12', '4', '1'), ('5', 'Peanut Butter', '150', '18', '9', '2', '2', '3', '1');

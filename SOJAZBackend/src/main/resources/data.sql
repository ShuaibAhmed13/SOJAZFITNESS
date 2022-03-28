INSERT INTO User VALUES ('1', True, 'Jake@StateFarm.com', 'Jake', 'TheSnake', 'password', 'ROLE_USER,ROLE_ADMIN',  'FarmerJake');
INSERT INTO User VALUES ('2', true, 'Caillou@Cartel.com', 'Caillou', 'Smith', 'password123', 'ROLE_USER',  'HairlessFiend');
-- INSERT INTO Food VALUES ('1','335', '0','Chicken', '38', '1 cup', '115', '0', '19'), ('2',  '250', '0','NY Strip Steak', '49', '1 Steak', '118', '0', '6'), ('3', '206', '45', 'Rice', '4', '1 Cup', '2', '0', '0'), ('4',  '400', '45', 'Spaghetti & Meatballs','18', '1 Can', '1295', '11', '16'), ('5', '188', '6', 'Peanut Butter','8', '2 tbsp', '5', '3', '16');
INSERT INTO Food VALUES ('1','335', '0.123', '0','Chicken','38', '5', '1 cup', '0.115', '0', '0', '19', '0'), ('2',  '250', '0.118', '0','NY Strip Steak', '49', '2.2', '1 Steak', '0.118', '0', '0', '6', '0.2'), ('3', '206', '0.0', '0.6', 'Rice', '4.3', '0.1', '1 Cup', '0.002', '0.1', '45', '0.4','0'), ('4',  '400', '0.029','0', 'Spaghetti & Meatballs','18', '6','1 Can', '1295', '11', '45', '16', '0.6'), ('5', '188', '0', '1.9', 'Peanut Butter','8', '3.3', '2 tbsp', '5', '3', '6', '16', '0');

INSERT INTO user_profile VALUES ('5', '6.1', '193', '185', 'Mexican Salavadorean','1');

Insert into video values('1', 'Calisthenicmovement',  'https://www.youtube.com/embed/bt5b9x9N0KU','Push Ups');
Insert into video values('2', 'LIVESTRONG.COM',  'https://www.youtube.com/embed/1fbU_MkV7NE','Sit Ups');
insert into exercise values(1, 'A chest exercise that uses a barbell and bench.', 'Bench Press', 'Weight');
insert into exercise values(2, 'A leg workout that uses a barbell.', 'Squats', 'Weight');
insert into exercise values(3,'100 jumps with a jumprope.','JumpingRope','Cardio');

Insert into equipment values (1, 'Bench', 'Weight');
Insert into equipment values (2, 'Barbell', 'Weight');
Insert into equipment values(3,'Jumprope', 'Cardio');


insert into exercise_equipments values(1,1);
insert into exercise_equipments values(1,2);
insert into exercise_equipments values(2,2);
insert into exercise_equipments values(3,3);


insert into muscles values(1, 'Chest', 'Pectoralis Major');
insert into muscles values(2, 'Legs', 'Quadriceps');

insert into exercise_muscles values(1,1);
insert into exercise_muscles values(2,2);

insert into user_food values (1, 403, 403, "2022-03-24", 403, 'lunch', 2, 123, 432, 123, 1, 1);
insert into user_food values (2, 334, 334, "2022-03-25", 334, 'lunch', 2, 240, 323, 343, 2, 1);
insert into user_food values (3, 393, 393, "2022-03-24", 393, 'lunch', 2, 420, 142, 232, 1, 2);
insert into user_food values (4, 299, 299, "2022-03-26", 299, 'lunch', 2, 123, 432, 432, 5, 1);
insert into user_food values (5, 249, 249, "2022-03-26", 249, 'Dinner', 2, 423, 432, 432, 5, 1);
insert into user_food values (6, 330, 330, "2022-03-27", 330, 'Breakfast', 2, 402, 234, 432, 4, 1);
insert into user_food values (7, 390, 331, "2022-03-28", 330, 'Breakfast', 2, 422, 234, 442, 4, 1);
insert into user_food values (8, 229, 242, "2022-03-28", 249, 'Dinner', 2, 433, 431, 132, 5, 1);

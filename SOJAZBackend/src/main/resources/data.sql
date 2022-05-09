INSERT INTO User VALUES ('1', True, 'Jake@StateFarm.com', 'Jake', 'TheSnake', '$2a$10$mvg9pZb8HhkWPBYK5qrzgu7zHFZ5HL4JSA/JMxuqMjk1GzVFMQBf.', null, 'ROLE_USER,ROLE_ADMIN',  'FarmerJake') ;
INSERT INTO User VALUES ('2', true, 'Caillou@Cartel.com', 'Caillou', 'Smith', '$2a$10$gCSLVjaTYolvW4d8RB9nHeNcRrKIrQ/VbHa5EngeZVSDo23X7WrgC',null, 'ROLE_USER',  'HairlessFiend');
INSERT INTO User VALUES ('3', true, 'jonc9011@gmail.com', 'Jay', 'Cee', '$2a$10$4KbhjmY/RrKKyE0fYZhAUerfeKd6dd3/fRKvRfnGQU30ZpbyW1sTG', null, 'ROLE_USER',  'HairGod');
-- INSERT INTO Food VALUES ('1','335', '0','Chicken', '38', '1 cup', '115', '0', '19'), ('2',  '250', '0','NY Strip Steak', '49', '1 Steak', '118', '0', '6'), ('3', '206', '45', 'Rice', '4', '1 Cup', '2', '0', '0'), ('4',  '400', '45', 'Spaghetti & Meatballs','18', '1 Can', '1295', '11', '16'), ('5', '188', '6', 'Peanut Butter','8', '2 tbsp', '5', '3', '16');
INSERT INTO Food VALUES ('1','335', '0.123', '0','Chicken','38', '5', '1 cup', '0.115', '0', '0', '19', '0'), ('2',  '250', '0.118', '0','NY Strip Steak', '49', '2.2', '1 Steak', '0.118', '0', '0', '6', '0.2'), ('3', '206', '0.0', '0.6', 'Rice', '4.3', '0.1', '1 Cup', '0.002', '0.1', '45', '0.4','0'), ('4',  '400', '0.029','0', 'Spaghetti & Meatballs','18', '6','1 Can', '1295', '11', '45', '16', '0.6'), ('5', '188', '0', '1.9', 'Peanut Butter','8', '3.3', '2 tbsp', '5', '3', '6', '16', '0'), ('6', '158', '0', '0', 'Sour Patch Kids','0', '0', '16 Pieces', '18', '24', '40', '0', '0'),('7', '260', '40', '0', 'Lunchables (Turkey&Cheddar w/ Crackers)','12', '7', '1 Package', '67', '5', '22', '13', '0'),('8', '79', '0', '0.8', 'Bread','2.7', '0.2', '1 Slice', '147', '1.5', '15', '1', '0');;

INSERT INTO user_profile VALUES ('5', '6.1', '1800', '193','3000', '185', 'Carnivore', 'Male' , '1');
INSERT INTO user_profile VALUES ('4', '6.1', '1234', '193','2000', '185', 'Vegetarian','Female', '3');

Insert into video values('1', 'Calisthenicmovement',  'https://www.youtube.com/embed/bt5b9x9N0KU','Push Ups');
Insert into video values('2', 'LIVESTRONG.COM',  'https://www.youtube.com/embed/1fbU_MkV7NE','Sit Ups');
insert into exercise values(1, '30', 'The bench press is a compound exercise that targets the muscles of the upper body. ', 'Bench Press', 'Weight');
insert into exercise values(2, '20', 'strength exercise in which the trainee lowers their hips from a standing position and then stands back up.', 'Squats', 'Weight');
insert into exercise values(3, '40', 'swinging a rope around your body and jumping over it as it passes under your feet.','JumpingRope','Cardio');
insert into exercise values(4, '30', 'A biceps workout that can be done with dumbbells or a barbell.', 'Bicep Curls', 'Weight');



insert into exercise values(5, '28', 'Stand up straight, then push through the balls of your feet and raise your heel until you are standing on your toes. Then lower slowly back to the start', 'Calf Raises', 'Weight');
insert into exercise values(6, '300', 'Run or walk on the machine to keep a consistent pace.', 'Treadmill', 'Cardio');
insert into exercise values(7, '117.5', 'fitness machine that simulates the experience of walking (or running) up a flight of stairs to provide a challenging, low impact workout', 'Stair Climber', 'Cardio');
insert into exercise values(8, '40', 'An isolation exercise that works the muscle on the back of the upper arm.', 'Triceps Extension', 'Weight');
insert into exercise values(9, '80', 'An exercise that targets your back muscles.', 'Lateral pull down', 'Weight');
insert into exercise values(10, '70', 'A weightlifting exercise for the biceps in which a barbell is lifted by flexing the elbows, with the upper arms resting on an angled bench.', 'Preacher Curls', 'Weight');
insert into exercise values(11, '80', 'An isolation exercise targeting your upper trapezius muscles.', 'Dumbbell Shrug', 'Weight');
insert into exercise values(12, '80', 'the dumbbell hammer curl or the neutral grip dumbbell curl, is a strength training exercise that targets your biceps and forearms.', 'Hammer Curl', 'Weight');
insert into exercise values(13, '90', 'a standing position steps forward into a position in which the front knee is deeply bent while keeping the torso erect and then returns back to the starting position.', 'Lunges', 'Weight');
insert into exercise values(14, '100', 'Stand straight with both feet on ground and legs straight, hands hanging down in front of you.
Press into the supporting leg as you slide the non-supporting leg back, allowing your upper body to move forward with your hip as the hinge.', 'Single-Leg Deadlift', 'Weight');
insert into exercise values(15, '90', 'A traditional barbell lift used to develop the strength of the posterior chain muscles, including the erector spinae, gluteus maximus, hamstrings and adductors.', 'Romanian Deadlift', 'Weight');


Insert into equipment values (1, 'Bench', 'Weight');
Insert into equipment values (2, 'Barbell', 'Weight');
Insert into equipment values(3,'Jumprope', 'Cardio');
Insert into equipment values(4,'Dumbbells', 'Weight');



insert into exercise_equipments values(1,1);
insert into exercise_equipments values(1,2);
insert into exercise_equipments values(2,2);
insert into exercise_equipments values(3,3);
insert into exercise_equipments values(4,2);
insert into exercise_equipments values(4,4);


insert into muscles values(1, 'Chest', 'Pectorals');
insert into muscles values(2, 'Legs', 'Quadriceps');
insert into muscles values(3, 'Arms', 'Biceps');
insert into muscles values(4, 'Arms', 'Triceps');
insert into muscles values(5, 'Arms', 'Forearms');
insert into muscles values(6, 'Core', 'Abdominals');
insert into muscles values(7, 'Legs', 'Hamstrings');
insert into muscles values(8, 'Legs', 'Calves');
insert into muscles values(9, 'Shoulders', 'Deltoids');
insert into muscles values(10, 'Hips', 'Glutes');
insert into muscles values(11, 'Back', 'Lats');
insert into muscles values(12, 'Back', 'Traps');



insert into exercise_muscles values(1,1);
insert into exercise_muscles values(2,2);
insert into exercise_muscles values(4,3);
insert into exercise_muscles values(2,7);
insert into exercise_muscles values(2,10);
insert into exercise_muscles values(1,4);
insert into exercise_muscles values(1,9);

insert into exercise_muscles values(5,8);
insert into exercise_muscles values(7,6);

insert into exercise_muscles values(9,11);
insert into exercise_muscles values(10,3);
insert into exercise_muscles values(11,9);
insert into exercise_muscles values(12,3);
insert into exercise_muscles values(13,2);
insert into exercise_muscles values(14,2);
insert into exercise_muscles values(15,7);



insert into user_food values (1, 403, 403, "2022-04-28", 403, 'lunch', 2, 123, 432, 123, 1, 1);
insert into user_food values (2, 334, 334, "2022-04-29", 334, 'lunch', 2, 240, 323, 343, 2, 1);
insert into user_food values (3, 393, 393, "2022-05-07", 393, 'lunch', 2, 420, 142, 232, 1, 2);
insert into user_food values (4, 299, 299, "2022-05-08", 299, 'lunch', 2, 123, 432, 432, 5, 1);
insert into user_food values (5, 249, 249, "2022-04-26", 249, 'Dinner', 2, 423, 432, 432, 5, 1);
insert into user_food values (6, 542, 330, "2022-05-08", 330, 'Breakfast', 2, 402, 234, 432, 4, 1);
insert into user_food values (7, 390, 331, "2022-05-07", 330, 'Breakfast', 2, 422, 234, 442, 4, 1);
insert into user_food values (8, 122, 242, "2022-04-27", 249, 'Dinner', 2, 433, 431, 132, 5, 1);
insert into user_food values (9, 233, 242, "2022-04-28", 249, 'Dinner', 2, 433, 431, 132, 5, 1);
insert into user_food values (10, 554, 233, "2022-04-29", 543, 'Dinner', 2, 212, 431, 132, 5, 1);
insert into user_food values (11, 432, 232, "2022-04-30", 244, 'Dinner', 2, 122, 431, 132, 5, 1);
insert into user_food values (12, 122, 201, "2022-05-01", 442, 'Dinner', 2, 123, 122, 343, 5, 1);
insert into user_food values (13, 342, 243, "2022-05-02", 422, 'Dinner', 2, 122, 431, 132, 5, 1);
insert into user_food values (14, 432, 653, "2022-05-03", 123, 'Dinner', 2, 123, 234, 244, 5, 1);
insert into user_food values (15, 332, 120, "2022-05-06", 432, 'Dinner', 2, 341, 122, 343, 5, 1);
insert into user_food values (16, 321, 102, "2022-05-07", 543, 'Dinner', 2, 212, 431, 132, 5, 1);
insert into user_food values (17, 643, 233, "2022-05-08", 123, 'Dinner', 2, 121, 234, 244, 5, 1);


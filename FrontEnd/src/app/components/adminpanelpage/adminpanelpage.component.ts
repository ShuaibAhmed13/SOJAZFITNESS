import {Component, OnDestroy, OnInit} from '@angular/core';
import {userDTO, UserService} from "../services/user.services";
import {User} from "../interfaces/User";
import {Observable, Subscription, TimeInterval} from "rxjs";
import {FoodService} from "../services/food.service";
import {Food} from "../interfaces/Food";
import {Equipment} from "../interfaces/equipment";
import {EquipmentService} from "../services/equipment.service";
import {MuscleService} from "../services/muscle.service";
import {Muscle} from "../interfaces/Muscle";
import {Exercise} from "../interfaces/Exercise";
import {ExerciseService} from "../services/exercise.service";


@Component({
  selector: 'app-adminpanelpage',
  templateUrl: './adminpanelpage.component.html',
  styleUrls: ['./adminpanelpage.component.scss']
})
export class AdminpanelpageComponent implements OnInit, OnDestroy {

  selectedtab: string = 'user';
  users: userDTO[] = [];
  foods: Food[] = [];
  muscles: Muscle[] = [];
  exercises: Exercise[] = [];
  equipments: Equipment[] = [];
  usersTHlist: string[] = ['ID', 'EMAIL', 'USERNAME', 'FIRST NAME', 'LAST NAME', 'ROLE', 'SUSPEND'];
  foodsTHlist: string[] = ['ID', 'NAME', 'CALORIES','PROTEIN', 'TOTAL CARBS', 'SUGAR', 'DIETARY FIBER', 'TOTAL FATS', 'SATURATED FATS', 'TRANS FATS', 'CHOLESTEROL', 'SODIUM', 'SERVING SIZE'];
  equipmentsTHlist: string[] = ['ID', 'NAME', 'TYPE'];
  musclesTHlist: string[] = ['ID', 'MUSCLE NAME', 'MUSCLE GROUP'];
  exercisesTHlist: string[] = ['ID', 'NAME', 'DESCRIPTION'];
  chooseModal: string = "";
  editItem: any;
  interval: number = 0
  subscribe: Subscription | undefined;
  searchValue: string = "";

  showAndChooseModal(option: string) {
    this.chooseModal = option;
  }

  changeSelected(selected: string) {
    this.selectedtab = selected;
    this.ngOnInit();
  }

  constructor(public userService: UserService, public foodService: FoodService, public equipmentService: EquipmentService, public muscleService: MuscleService, public exerciseService: ExerciseService) { }
  ngOnInit(): void {
    this.setTimer();
  }

  setTimer() {
    if(this.selectedtab === 'user') {
      this.getUsers();
      this.interval = setInterval(() => {
        this.getUsers()
      },5000)
    }
    else if(this.selectedtab === 'food') {
      this.getFoods();
      this.interval = setInterval(() => {
        this.getFoods();
      }, 5000)
    }
    else if(this.selectedtab === 'equipment') {
      this.getEquipment();
      this.interval = setInterval(() => {
        this.getEquipment();
      }, 5000)
    }
    else if(this.selectedtab === 'muscles') {
      this.getMuscles();
      this.interval = setInterval(() => {
        this.getMuscles();
      }, 5000)
    }
  }


  ngOnDestroy() {
    clearInterval(this.interval);
    // @ts-ignore
    this.subscribe.unsubscribe();
  }

  suspendUser(user_id: number) {
    this.userService.suspendUser(user_id).subscribe();
    this.ngOnInit();
  }
  reactivateUser(user_id:number) {
    this.userService.reactivateUser(user_id).subscribe();
    this.ngOnInit();
  }

  getUsers() {
    this.subscribe = this.userService.getAllUsers().subscribe(data => {
      this.users = data;
    })
  }

  getFoods() {
    this.subscribe = this.foodService.getAllFoods().subscribe(data => {
      this.foods = data;
    })
  }

  getEquipment() {
    this.subscribe = this.equipmentService.getAllEquipment().subscribe(data => {
      this.equipments = data;
    })
  }

  getMuscles() {
    this.subscribe = this.muscleService.getAllMuscle().subscribe(data => {
      this.muscles = data;
    })
  }

  getExercises() {
    /*this.subscribe = this.exerciseService.getExercises().subscribe(data => {
      this.exercises = data;
    })*/
  }

  deleteFood(food_id: number) {
    if(confirm("Are you sure you want to delete this food?")) {
      this.subscribe = this.foodService.deleteFood(food_id).subscribe(data => {
        return data;
        this.ngOnInit();
      })
    }
  }

  deleteMuscle(muscleId: number) {
    if(confirm("Are you sure you want to delete this muscle?")) {
      this.subscribe = this.muscleService.deleteMuscle(muscleId).subscribe(data => {
        return data;
        this.ngOnInit();
      })
    }
  }

  deleteExercise(exerciseId: number) {
    if(confirm("Are you sure you want to delete this exercise?")) {
      this.subscribe = this.equipmentService.deleteEquipment(exerciseId).subscribe(data => {
        console.log(data);
        return data;
        this.ngOnInit();
      })
    }
  }

  deleteEquipment(equipment_id: number) {
    if(confirm("Are you sure you want to delete this equipment?")) {
      this.subscribe = this.equipmentService.deleteEquipment(equipment_id).subscribe(data => {
        console.log(data);
        return data;
        this.ngOnInit();
      })
    }
  }


  // deleteUser(user_id: number) {
  //   if (confirm("Are you sure you want to delete this user?")) {
  //     this.userService.deleteUser(user_id).subscribe(data => {
  //         console.log(data);
  //       },
  //       error => {
  //         console.log(error.error.text);
  //         this.ngOnInit();
  //       }
  //     );
  //   } else {
  //     return;
  //   }
  // }

  editFood(food_id: number) {
    this.chooseModal = "editfood";
    let food = this.foods.find(x => x.id === food_id);
    this.editItem = food;
  }

  editEquipment(equipment_id: number) {
    this.chooseModal = 'editequipment';
    let equipment = this.equipments.find(x => x.id === equipment_id);
    this.editItem = equipment;
  }

  editMuscle(muscleId: number) {
    this.chooseModal = 'editmuscle';
    let muscle = this.muscles.find(x => x.id === muscleId);
    this.editItem = muscle;
  }

  editExercise(exerciseId: number) {
    this.chooseModal = 'editexcerise';
    let exercise = this.exercises.find(x => x.id === exerciseId);
    this.editItem = exercise;
  }

  modalClose() {
    this.chooseModal = ''
    this.ngOnInit();
  }
}

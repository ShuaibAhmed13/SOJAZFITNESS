// import {Router} from "@angular/router";
// import {Exercise} from "../interfaces/Exercise";
// import {ExerciseWeight} from "../interfaces/ExerciseWeight";
// import {Observable} from "rxjs";
// import {HttpClient} from "@angular/common/http";
// import {Injectable} from "@angular/core";
// import{Equipment} from "../interfaces/Equipment";
//
// @Injectable({
//   providedIn: 'root'
// })
// export class workoutequipmentService {
//   private exercises: any;
//
//   constructor(private httpClient: HttpClient, private router: Router) { }
//
//
//   getExercises() {
//     this.httpClient.get<Exercise[]>('api/exercise/getExercises').subscribe(data => {
//       console.log(data);
//       this.exercises = data;
//     })
//   }
//   filterEquipment(filterData: any){
//     this.workoutequipmentService.getFilteredData(filterData.value.filterName);
//   }
//
//   getEquipment(){
//     this.httpClient.get<Equipment[]>()
//     return this.workoutequipmentService.getEquipment();
//   }
//
//
//
// }

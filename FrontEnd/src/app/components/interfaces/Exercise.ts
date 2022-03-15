export interface Exercise {
  id?: number;
  name?: string;
  description?: string;
  type?:string;
  muscles?: [{id?:number, muscleName?:string, muscleGroup?:string}];
  equipments?:[{id?:number,name?:string,type?:string}];
}

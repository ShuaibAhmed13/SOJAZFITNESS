export interface Exercise {
  id?: number;
  name?: string;
  description?: string;
  muscles?: [{id?:number, muscleName?:string, muscleGroup?:string}];
}

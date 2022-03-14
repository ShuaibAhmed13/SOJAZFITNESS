import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Equipment} from "../interfaces/equipment";

@Injectable({
  providedIn: 'root'
})
export class EquipmentService {

  constructor(public httpClient: HttpClient) { }

  getAllEquipment():Observable<Equipment[]> {
    return this.httpClient.get<Equipment[]>('api/equipment/getallequipment');
  }

  getEquipmentById(equipment_id: number):Observable<Equipment> {
    return this.httpClient.get<Equipment>('api/equipment/getequipmentbyid/' + equipment_id);
  }

  createEquipment(equipment: { name: any; type: any }): Observable<string> {
    return this.httpClient.post<string>('api/equipment/crud/createequipment', equipment);
  }

  updateEquipment(equipment_id: number, equipment: { name: any; type: any }): Observable<string> {
    return this.httpClient.put<string>('api/equipment/crud/updateequipment/' + equipment_id, equipment);
  }

  deleteEquipment(equipment_id: number):Observable<string> {
    return this.httpClient.delete<string>('api/equipment/crud/deleteequipment/' + equipment_id);
  }


}

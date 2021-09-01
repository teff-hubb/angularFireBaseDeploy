import { Injectable } from '@angular/core';
import { House } from 'src/app/interfaces/house.interface';
import{ HOUSES } from './house.db';

@Injectable({
  providedIn: 'root'
})
export class HousesService {

  arrHouses: House[] = [];

  constructor() {
    
   }
}

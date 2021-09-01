import { Injectable } from '@angular/core';
import { House } from 'src/interfaces/house.interface';

@Injectable({
  providedIn: 'root'
})
export class HousesService {

  arrHouses: House[];

  constructor() {
    this.arrHouses = [{
      id: 1,
      titulo: "bonita casa",
      direccion: "calle fuengirlola",
      ciudad: "fuengirola",
      numerohabitaciones: 2,
      propietario: "Antoine",
      disponibilidad: true,
      foto: "https://i1.wp.com/www.realcostainmobiliaria.es/wp-content/uploads/WPL/49/thimg_Captura-de-pantalla-2020-10-23-a-las-13.02.20_1600x900.png?resize=1170%2C658",
      lat: 1.1,
      long: 2.2
    
    }]
   }
}

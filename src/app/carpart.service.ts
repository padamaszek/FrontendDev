import { Injectable } from '@angular/core';
import { Carpart } from './carpart';
import { CARPARTS } from './mock-carparts';
@Injectable()
export class CarpartService {
  getCarparts(): Promise<Carpart[]> {
    return Promise.resolve(CARPARTS);
  }
  getCarpart(id: number): Promise<Carpart> {
  return this.getCarparts()
             .then(carparts => carparts.find(carpart => carpart.id === id));
}
}
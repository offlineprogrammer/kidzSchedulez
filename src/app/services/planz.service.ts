import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import {Plan} from '../classes/plan';

@Injectable({
  providedIn: 'root'
})
export class PlanzService {

  public planz: Plan[]=[];
  public loaded: boolean = false;

  constructor(private storage: Storage) { }

  createPlan(kidId, name, plandate): void {

    // Create a unique id that is one larger than the current largest id
    let id = Math.max(...this.planz.map(plan => parseInt(plan.id)), 0) + 1;

    this.planz.push({
      id: id.toString(),
      name: name,
      planDate:plandate,
      kidId:kidId

    });

    this.save();

  }

  save(): void {
   
    this.storage.set('planz', this.planz);
  }

}

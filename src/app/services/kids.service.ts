import { Injectable } from '@angular/core';
import {Kid} from '../classes/kid';
import { Storage } from '@ionic/storage';
import {Plan} from '../classes/plan';

@Injectable({
  providedIn: 'root'
})
export class KidsService {

  public kids: Kid[]=[];
  public planz: Plan[]=[];
  public loaded: boolean = false;

  constructor(private storage: Storage) { }


  load(): Promise<boolean> {

    // Return a promise so that we know when this operation has completed
    return new Promise((resolve) => {

      // Get the notes that were saved into storage
      this.storage.get('kids').then((kids) => {

        // Only set this.notes to the returned value if there were values stored
        if(kids != null){
          this.kids = kids;
        }

        // This allows us to check if the data has been loaded in or not
        this.loaded = true;
        resolve(true);

      });

    });

  }


  getKid(id): Kid {
  
    return this.kids.find(kid => kid.id === id);

    
  }

  deleteKid(kid): void {

    // Get the index in the array of the note that was passed in
    let index = this.kids.indexOf(kid);

    // Delete that element of the array and resave the data
    if(index > -1){
      this.kids.splice(index, 1);
      this.save();
    }

  }

  createPlan(kid, name, plandate): void {

   this.planz = kid.planz;
    let id = Math.max(...this.planz.map(plan => parseInt(plan.id)), 0) + 1;

    this.planz.push({
      id: id.toString(),
      name: name,
      planDate:plandate,
      planTaskz:[]

    });

    this.save();

  }

  createKid(name): void {

    // Create a unique id that is one larger than the current largest id
    let id = Math.max(...this.kids.map(kid => parseInt(kid.id)), 0) + 1;

    this.kids.push({
      id: id.toString(),
      name: name,
      planz:[]
    });

    this.save();

  }

  save(): void {
   
    this.storage.set('kids', this.kids);
  }


}

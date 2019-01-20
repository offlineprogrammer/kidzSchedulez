import { Injectable } from '@angular/core';
import {Kid} from '../classes/kid';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class KidsService {

  public kids: Kid[]=[];
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
    // Return the note that has an id matching the id passed in
    return this.kids.find(kid => kid.id === id);
    
  }


  createKid(name): void {

    // Create a unique id that is one larger than the current largest id
    let id = Math.max(...this.kids.map(kid => parseInt(kid.id)), 0) + 1;

    this.kids.push({
      id: id.toString(),
      name: name
    });

    this.save();

  }

  save(): void {
   
    this.storage.set('kids', this.kids);
  }


}

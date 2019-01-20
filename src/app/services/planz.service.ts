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

 

}

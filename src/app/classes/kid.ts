import {Plan} from '../classes/plan';

export class Kid {
  id: string;
  name: string;
  photo: string;
  planz: Plan[];

  constructor(item: any) {
    this.id = item.id;
    this.name = item.name;
    this.photo = item.photo;
    this.planz = [];
  }
}

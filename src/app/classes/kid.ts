import {Plan} from '../classes/plan';

export class Kid {
  id: string;
  name: string;
  planz: Plan[];

  constructor(item: any) {
    this.id = item.id;
    this.name = item.name;
    this.planz = [];
  }
}

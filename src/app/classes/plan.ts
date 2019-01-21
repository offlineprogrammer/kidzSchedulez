import {Task} from '../classes/task'

export class Plan {
    id: string;
    name: string;
    planDate: Date;
    planTaskz: Task[]

  
    constructor(item: any) {
      this.id = item.id;
      this.name = item.name;
      this.planDate=item.planDate;
      this.planTaskz=[];
    }
  }
  
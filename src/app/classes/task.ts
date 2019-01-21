export class Task {
    id: string;
    name: string;
    bComplete: boolean;

  
    constructor(item: any) {
      this.id = item.id;
      this.name = item.name;
      this.bComplete=item.bComplete
    }
  }
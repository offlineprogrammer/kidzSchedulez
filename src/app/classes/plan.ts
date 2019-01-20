export class Plan {
    id: string;
    name: string;
    kidId:string;
  
    constructor(item: any) {
      this.id = item.id;
      this.name = item.name;
      this.kidId = item.kidId;
    }
  }
  
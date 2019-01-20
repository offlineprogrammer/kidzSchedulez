export class Plan {
    id: string;
    name: string;
    planDate: Date;
    kidId:string;
  
    constructor(item: any) {
      this.id = item.id;
      this.name = item.name;
      this.planDate=item.planDate;
      this.kidId = item.kidId;
    }
  }
  
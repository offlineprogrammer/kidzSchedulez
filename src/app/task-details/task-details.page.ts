import { Component, OnInit } from '@angular/core';
import {Task} from '../classes/task'
import { KidsService } from "../services/kids.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.page.html',
  styleUrls: ['./task-details.page.scss'],
})
export class TaskDetailsPage implements OnInit {
  private task:Task;
  private kid_Id: string;
  private plan_Id: string;

  constructor(
    private route: ActivatedRoute,
    private kidsService: KidsService,
  ) { 
    this.task ={
      id:'',
      name:'',
      bComplete:false
    }
  }

  ngOnInit() {
    let taskId = this.route.snapshot.paramMap.get("task_id");
    this.kid_Id = this.route.snapshot.paramMap.get("kid_id");
    this.plan_Id = this.route.snapshot.paramMap.get("plan_id");

    if (this.kidsService.loaded) {
      this.task = this.kidsService.getTask(this.kid_Id,this.plan_Id,taskId);
    } else {
      this.kidsService.load().then(() => {
        this.task =  this.kidsService.getTask(this.kid_Id,this.plan_Id,taskId);
      });
    }
  }

}

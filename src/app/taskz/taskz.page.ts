import { Component, OnInit } from "@angular/core";
import { AlertController, NavController } from "@ionic/angular";
import { ActivatedRoute } from "@angular/router";
import { Kid } from "../classes/kid";
import {Plan} from "../classes/plan";
import { KidsService } from "../services/kids.service";
import { Task } from "../classes/task";

@Component({
  selector: "app-taskz",
  templateUrl: "./taskz.page.html",
  styleUrls: ["./taskz.page.scss"]
})
export class TaskzPage implements OnInit {
  private kid: Kid;
  private plan: Plan;
  private kid_Id: string;

  constructor(
    private route: ActivatedRoute,
    private navCtrl: NavController,
    private kidsService: KidsService,
    private alertCtrl: AlertController
  ) {

    this.plan = {
      id: '',
      name: '',
      planDate: new Date(),
     planTaskz:[]
    };

    this.kid = {
      id: '',
      name: '',
      photo:'',
      planz:[]
    };
  }

  openDetails(otask: Task) {
    this.navCtrl.navigateForward('task-details/'+this.kid_Id+'/'+this.plan.id +'/'+otask.id);
  }

  completeTask(otask: Task) {
    otask.bComplete=true;
    this.kidsService.updateTask(this.kid_Id,this.plan.id,otask);
   
  }

  ngOnInit() {
    this.kid_Id = this.route.snapshot.paramMap.get("kid_id");
    let planId = this.route.snapshot.paramMap.get("plan_id");

    if(this.kidsService.loaded){
      this.plan = this.kidsService.getPlan(this.kid_Id,planId)
    } else {
      this.kidsService.load().then(() => {
        this.plan = this.kidsService.getPlan(this.kid_Id,planId)
      });
    }

  }

  goBack() {
    this.navCtrl.navigateBack('planz/'+this.plan.id);
  }

  addTask() {
    this.alertCtrl
      .create({
        header: "New Task",
        message: "Enter the Task name ",
        inputs: [
          {
            type: "text",
            name: "taskname"
          }
        ],
        buttons: [
          {
            text: "Cancel"
          },
          {
            text: "Save",
            handler: data => {
              this.kidsService.createTask(
                this.kid_Id,
                this.plan,
                data.taskname
              );
            }
          }
        ]
      })
      .then(alert => {
        alert.present();
      });
  }

}

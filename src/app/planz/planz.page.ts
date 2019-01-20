import { Component, OnInit } from "@angular/core";
import { AlertController,NavController } from "@ionic/angular";
import { ActivatedRoute } from "@angular/router";
import { Kid } from "../classes/kid";
import { KidsService } from "../services/kids.service";
import {PlanzService} from "../services/planz.service";

@Component({
  selector: "app-planz",
  templateUrl: "./planz.page.html",
  styleUrls: ["./planz.page.scss"]
})
export class PlanzPage implements OnInit {
  private kid: Kid;

  constructor(
    private route: ActivatedRoute,
    private navCtrl: NavController,
    private kidsService: KidsService,
    private planzService: PlanzService,
    private alertCtrl: AlertController,
  ) {
    this.kid = {
      id: '',
      name: ''
    };
  }

  ngOnInit() {
    let kidId = this.route.snapshot.paramMap.get("id");

    if(this.kidsService.loaded){
      this.kid = this.kidsService.getKid(kidId)
    } else {
      this.kidsService.load().then(() => {
        this.kid = this.kidsService.getKid(kidId)
      });
    }

  }

  addPlan() {
    this.alertCtrl
      .create({
        header: "New Plan",
        message: "Enter the Plan name & date",
        inputs: [
          {
            type: "text",
            name: "planname"
          },
          {
            type: "date",
            name: "plandate"

          },
          
        ],
        buttons: [
          {
            text: "Cancel"
          },
          {
            text: "Save",
            handler: data => {
            this.planzService.createPlan(this.kid.id,data.planname, data.plandate);
            }
          }
        ]
      })
      .then(alert => {
        alert.present();
      });
  }


  deleteKid(){
    this.kidsService.deleteKid(this.kid);
    this.navCtrl.navigateBack('/home');
  }

}

import { Component, OnInit } from "@angular/core";
import { AlertController, NavController } from "@ionic/angular";
import {KidsService} from "../services/kids.service";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage implements OnInit {
  constructor(
    private kidsService: KidsService,
    private alertCtrl: AlertController,
    private navCtrl: NavController
  ) {}

  ngOnInit() {
    this.kidsService.load();
  }

  addKid() {
    this.alertCtrl
      .create({
        header: "New Kid",
        message: "Enter the Kid name",
        inputs: [
          {
            type: "text",
            name: "name"
          }
        ],
        buttons: [
          {
            text: "Cancel"
          },
          {
            text: "Save",
            handler: data => {
            this.kidsService.createKid(data.name);
            }
          }
        ]
      })
      .then(alert => {
        alert.present();
      });
  }
}

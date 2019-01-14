import { Component, OnInit } from "@angular/core";
import { AlertController, NavController } from "@ionic/angular";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage implements OnInit {
  constructor(
    private alertCtrl: AlertController,
    private navCtrl: NavController
  ) {}

  ngOnInit() {}

  addKid() {
    this.alertCtrl
      .create({
        header: "New Kid",
        message: "What should the title of this note be?",
        inputs: [
          {
            type: "text",
            name: "title"
          }
        ],
        buttons: [
          {
            text: "Cancel"
          },
          {
            text: "Save",
            handler: data => {
            //  this.notesService.createNote(data.title);
            }
          }
        ]
      })
      .then(alert => {
        alert.present();
      });
  }
}

import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";
import { ActivatedRoute } from "@angular/router";
import { Kid } from "../classes/kid";
import { KidsService } from "../services/kids.service";

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
    private kidsService: KidsService
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
}

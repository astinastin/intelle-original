import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SharedserviceService } from 'src/app/sharedservice.service';
import { NavigationExtras, Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-alldiscussions',
  templateUrl: './alldiscussions.component.html',
  styleUrls: ['./alldiscussions.component.scss'],
})
export class AllDiscussionsComponent implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() { }

  getDiscussionsById(ids) {
    console.log("hit");
    let navigationExtras: NavigationExtras = {
      queryParams: {
        id: JSON.stringify(ids)
      }
    };
    this.navCtrl.navigateForward(['home/discussions/discussions-details'], navigationExtras)
  }

}

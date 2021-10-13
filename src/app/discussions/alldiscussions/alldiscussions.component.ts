import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SharedserviceService } from 'src/app/sharedservice.service';
import { NavigationExtras, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-alldiscussions',
  templateUrl: './alldiscussions.component.html',
  styleUrls: ['./alldiscussions.component.scss'],
})
export class AllDiscussionsComponent implements OnInit {

  constructor(private navCtrl: NavController,private _formBuilder : FormBuilder) { }

  firstFormGroup: FormGroup;

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
   }

  getDiscussionsById(ids) {
    console.log("hit");
    let navigationExtras: NavigationExtras = {
      queryParams: {
        id: JSON.stringify(ids)
      }
    };
    this.navCtrl.navigateForward(['home/discussions/discussions-details'], navigationExtras)
  }

  discussion: any = {
    comments: [
      { fullName: "india Cale", datePosted: new Date(), comment: 'At vero et accumsas et lusto odio dignissimos ducimus qui blanditiss prease ntium voluntium delenti atque corrupti quos dolores et quas excepturi sint ' },
      { fullName: "india Cale", datePosted: new Date(), comment: 'At vero et accumsas et lusto odio dignissimos ducimus qui blanditiss prease ntium voluntium delenti atque corrupti quos dolores et quas excepturi sint ' },
      { fullName: "india Cale", datePosted: new Date(), comment: 'At vero et accumsas et lusto odio dignissimos ducimus qui blanditiss prease ntium voluntium delenti atque corrupti quos dolores et quas excepturi sint ' },
      { fullName: "india Cale", datePosted: new Date(), comment: 'At vero et accumsas et lusto odio dignissimos ducimus qui blanditiss prease ntium voluntium delenti atque corrupti quos dolores et quas excepturi sint ' },
      { fullName: "india Cale", datePosted: new Date(), comment: 'At vero et accumsas et lusto odio dignissimos ducimus qui blanditiss prease ntium voluntium delenti atque corrupti quos dolores et quas excepturi sint ' },
      { fullName: "india Cale", datePosted: new Date(), comment: 'At vero et accumsas et lusto odio dignissimos ducimus qui blanditiss prease ntium voluntium delenti atque corrupti quos dolores et quas excepturi sint ' }
    ]
  }

}

import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AskComponent } from '../ask/ask.component';

@Component({
  selector: 'activity-details',
  templateUrl: './activity-details.component.html',
  styleUrls: ['./activity-details.component.scss'],
})
export class ActivityDetailsComponent implements OnInit {

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

  constructor(private modalController: ModalController) { }

  ngOnInit() { }

  async presentAskExpertModal() {
    const modal = await this.modalController.create({
      component: AskComponent,
      cssClass: 'modal-wrapper'
    });
    return await modal.present();
  }

}

import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'process-details',
  templateUrl: './process-details.component.html',
  styleUrls: ['./process-details.component.scss'],
})

export class ProcessDetailsComponent implements OnInit {

  newComment : string = '';
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

  presentAskExpertModal(){}

}

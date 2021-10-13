import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { SharedserviceService } from 'src/app/sharedservice.service';
import { ModalController } from '@ionic/angular';
import { AskComponent } from '../ask/ask.component';
@Component({
  selector: 'discussion-details',
  templateUrl: './discussion-details.component.html',
  styleUrls: ['./discussion-details.component.scss'],
})

export class DiscussionDetailsComponent implements OnInit {

  tokenValue: string = '';
  paramId: any = '';
  loggedInUser: any = {};
  newComment: any = '';

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

  constructor(
    private route: ActivatedRoute,
    private service: SharedserviceService,
    private httpservice: HttpClient,
    private modalController: ModalController,
    private router : Router
  ) {
    this.route.queryParams.subscribe(params => {
      if (params && params.id) {
        this.paramId = params.id;
        this.getDiscussionDetails();
      }
    });
  }


  ngOnInit() {
    /*    this.loggedInUser = this.service.user;
       this.newComment = ''; */
  }

  ionViewDidEnter() {

    /*  this.newComment = '';
     this.tokenValue = this.service.token */
  }

  getDiscussionDetails() {
    /*     this.loggedInUser = this.service.user;
        this.tokenValue = this.service.token
        let headers = new HttpHeaders();
        headers = headers.set('Authorization', 'Bearer ' + this.tokenValue);
        this.httpservice.request('GET', 'https://lig-intellego-api-dv.azurewebsites.net/api/discussions/' + this.paramId, { headers })
          .subscribe(
            (res: any) => {
              let discussion = res && res.value && res.value.data ? res.value.data : {};
              this.discussion = discussion
              if(res && res.message)
              this.service.toastSuccess(res.message)
            },
            err => {
              if (err && err.value && err.value.toast && err.value.toast.message)
                this.service.toastError(err.value.toast.message)
            },
          ) */
  }

  saveDiscussions() {
    /*     this.tokenValue = this.service.token
        let headers = new HttpHeaders();
        headers = headers.set('Authorization', 'Bearer ' + this.tokenValue);
        this.httpservice.request('POST', 'https://lig-intellego-api-dv.azurewebsites.net/api/discussions/' + this.paramId + '/save', { headers })
          .subscribe(
            (res: any) => {
              if(res && res.message)
              this.service.toastSuccess(res.message)
            },
            err => {
              if (err && err.value && err.value.toast && err.value.toast.message)
                this.service.toastError(err.value.toast.message)
            },
          ) */
  }

  addNewComment() {
    /*    let headers = new HttpHeaders();
       headers = headers.set('Authorization', 'Bearer ' + this.tokenValue);
       this.httpservice.request('POST', 'https://lig-intellego-api-dv.azurewebsites.net/api/discussions/' + this.paramId + '/comment/', { headers, body: { comment: this.newComment } })
         .subscribe(
           (res: any) => {
             console.log("Comment Added ");
             this.getDiscussionDetails();
           },
           err => {
             if (err && err.value && err.value.toast && err.value.toast.message)
               this.service.toastError(err.value.toast.message)
           },
         ) */
  }

  async presentAskExpertModal() {
    const modal = await this.modalController.create({
      component: AskComponent,
      cssClass: 'modal-wrapper'
    });
    return await modal.present();
  }

  bookMarkComment(comment) {
    /*    let headers = new HttpHeaders();
       headers = headers.set('Authorization', 'Bearer ' + this.tokenValue);
       this.httpservice.request('POST', 'https://lig-intellego-api-dv.azurewebsites.net/api/discussions/' + this.paramId + '/comment/' + comment.id + '/bookmark', { headers })
         .subscribe(
           (res: any) => {
           },
           err => {
             if (err && err.value && err.value.toast && err.value.toast.message)
               this.service.toastError(err.value.toast.message)
           },
         ) */
  }

  startAssesment() {
   this.service.searchObj.next({action:'assesments'});
   this.router.navigate(['/home/discussions/assesments'])
  }

}

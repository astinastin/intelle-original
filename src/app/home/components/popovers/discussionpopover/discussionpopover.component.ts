import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedserviceService } from 'src/app/sharedservice.service';

@Component({
  selector: 'app-discussionpopover',
  templateUrl: './discussionpopover.component.html',
  styleUrls: ['./discussionpopover.component.scss'],
})
export class DiscussionpopoverComponent implements OnInit {

  constructor(
    private route : Router,
    private service : SharedserviceService
    ) { }

  ngOnInit() {}

  routeToContact()
  {
    this.service.searchObj.next({action:'contacts'})
    this.route.navigate(['/home/contacts'])
  }

}

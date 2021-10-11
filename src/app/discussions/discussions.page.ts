import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-discussions',
  templateUrl: './discussions.page.html',
  styleUrls: ['./discussions.page.scss'],
})
export class DiscussionsPage implements OnInit {

  constructor(private router: Router) { }


  selectedTab: any = "friends"
  segmentChanged(eve) {
    this.selectedTab = eve.detail.value
    if (this.selectedTab == 'mydiscussionss')
      this.router.navigate(['/home/discussions/my-discussions'])
    else
      this.router.navigate(['/home/discussions/saved'])
  }

  ngOnInit() {
  }

}

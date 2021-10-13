import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-learning',
  templateUrl: './learning.page.html',
  styleUrls: ['./learning.page.scss'],
})
export class LearningPage implements OnInit {

  constructor(private router: Router) { }

  selectedTab: any = "mylearnings"
  segmentChanged(eve) {
    this.selectedTab = eve.detail.value
    if(this.selectedTab == 'mylearnings')
    this.router.navigate(['/home/learning/my-learnings'])
    else
    this.router.navigate(['/home/learning/learn-more'])
  }

  ngOnInit() {
    this.selectedTab = 'mylearnings';
  }

}

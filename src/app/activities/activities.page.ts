import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.page.html',
  styleUrls: ['./activities.page.scss'],
})
export class ActivitiesPage implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }

  getActivityDetails()
  {
    this.router.navigate(['/home/activities/activity-details'])
  }
}

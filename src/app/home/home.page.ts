import { Component } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError, ActivatedRoute, ActivationStart, ActivationEnd } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  colSize: any = {
    size1: '2',
    size2: '6',
    size3: '2',
    size4: '2',
  }

  routeUrl: any = 'Home'
  constructor(private router: Router, private route: ActivatedRoute) {
    router.events.subscribe((event: Event) => {
      this.checkRouterEvent(event);
    });
  }

  checkRouterEvent(routerEvent: Event): void {
    if (routerEvent instanceof ActivationStart) {
      if (routerEvent.snapshot.data.title) {
        this.routeUrl = routerEvent.snapshot.data['title'];
      }
    }
  }

  navigateToStudy() {
    console.log("hit");
    
    this.colSize = {
      size1: '2',
      size2: '6',
      size3: '2'
    }
    this.router.navigate(['/home/learning/my-learnings'])
  }

  navigateToHome(){
    this.colSize.size1 = '3';
    this.colSize.size2 = '5';
    this.colSize.size3 = '3';
    this.router.navigate(['/home/intelligo-home'])
  }

  navigateToDiscussions() {
    this.colSize.size1 = '2';
    this.colSize.size2 = '5';
    this.colSize.size3 = '2';
    this.router.navigate(['/home/discussions/my-discussions'])
  }

  navigateToActivities() {
    this.colSize.size1 = '2';
    this.colSize.size2 = '8';
    this.colSize.size3 = '2';
    this.router.navigate(['/home/activities'])
  }

  navigateToNewActivities() {
    this.colSize.size1 = '2';
    this.colSize.size2 = '8';
    this.colSize.size3 = '2';
    this.router.navigate(['/home/activities/new-activity'])
  }

  navigateToProceses() {
    this.colSize.size1 = '3';
    this.colSize.size2 = '5';
    this.colSize.size3 = '3';
    
    this.router.navigate(['/home/prcoesses/my-processes'])
  }
}

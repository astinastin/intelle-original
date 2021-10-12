import { Component } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError, ActivatedRoute, ActivationStart, ActivationEnd } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { DiscussionpopoverComponent } from '../discussionpopover/discussionpopover.component';

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
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private popoverController: PopoverController) {
    router.events.subscribe((event: Event) => {
      this.checkRouterEvent(event);
    });
  }

  urlType: any = {}
  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if (event.url.includes('activities') && event.url.includes('activity-details')) {
          this.urlType = { ...{}, ...{ route: event.url } }
          this.setColSize(2, 6, 2)
          this.canShowRecommendation = true;
        }
        else if (event.url.includes('activities') && !event.url.includes('activity-details')) {
          this.urlType = { ...{}, ...{ route: event.url } }
          this.setColSize(2, 9, 1)
          this.canShowRecommendation = false;
        }
        else if (!event.url.includes('activities')) {
          this.urlType = { ...{}, ...{ route: event.url } }
          this.setColSize(2, 6, 2)
          this.canShowRecommendation = true;
        }
      }
    });
  }

  checkRouterEvent(routerEvent: Event): void {
    if (routerEvent instanceof ActivationStart) {
      if (routerEvent.snapshot.data.title) {
        this.routeUrl = routerEvent.snapshot.data['title'];
      }
    }
  }

  setColSize(size1, size2, size3) {
    this.colSize = {
      size1: size1,
      size2: size2,
      size3: size3
    }
  }

  canShowRecommendation
  navigateToStudy() {
    this.setColSize(2, 7, 3)
    this.router.navigate(['/home/learning/my-learnings'])
  }

  navigateToHome() {
    this.setColSize(2, 7, 3)
    this.router.navigate(['/home/intelligo-home'])
  }

  navigateToDiscussions() {
    this.setColSize(2, 7, 3)
    this.router.navigate(['/home/discussions/my-discussions'])
  }

  navigateToActivities() {
    this.setColSize(2, 8, 2)
    this.router.navigate(['/home/activities'])
  }

  navigateToNewActivities() {
    this.setColSize(2, 8, 2)
    this.router.navigate(['/home/activities/new-activity'])
  }

  navigateToProceses() {
    this.setColSize(2, 7, 3)
    this.router.navigate(['/home/prcoesses/my-processes'])
  }

  async openCreateDiscussionsPopover() {
    const popover = await this.popoverController.create({
      component: DiscussionpopoverComponent,
      translucent: true,
      showBackdrop: false
    });
    return await popover.present();
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivationStart, Router ,Event} from '@angular/router';

@Component({
  selector: 'app-discussions',
  templateUrl: './discussions.page.html',
  styleUrls: ['./discussions.page.scss'],
})
export class DiscussionsPage implements OnInit {

  constructor(
    private router: Router
  ) { 
    router.events.subscribe((event: Event) => {
      this.checkRouterEvent(event);
    });
  }

  routeUrl : any = '';
  checkRouterEvent(routerEvent: Event): void {
    if (routerEvent instanceof ActivationStart) {
      if (routerEvent.snapshot.data.title) {
        this.routeUrl = routerEvent.snapshot.data['title'];
      }
    }
  }


  selectedTab: any = "friends"
  segmentChanged(eve) {
    this.selectedTab = eve.detail.value
    if (this.selectedTab == 'mydiscussionss')
      this.router.navigate(['/home/discussions/my-discussions'])
    else
      this.router.navigate(['/home/discussions/saved'])
  }

  ngOnInit() {
    this.selectedTab = 'mydiscussionss'
  }

}

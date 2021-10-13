import { Component, OnInit } from '@angular/core';
import { ActivationStart, Router, Event } from '@angular/router';

@Component({
  selector: 'app-processes',
  templateUrl: './processes.page.html',
  styleUrls: ['./processes.page.scss'],
})

export class ProcessesPage implements OnInit {

  constructor(private router: Router) {
    router.events.subscribe((event: Event) => {
      this.checkRouterEvent(event);
    });
  }

  routeUrl: any = '';
  checkRouterEvent(routerEvent: Event): void {
    if (routerEvent instanceof ActivationStart) {
      if (routerEvent.snapshot.data.title) {
        this.routeUrl = routerEvent.snapshot.data['title'];
      }
    }
  }

  selectedTab: any = "myprocesses"
  segmentChanged(eve) {
    this.selectedTab = eve.detail.value
    if (this.selectedTab == 'myprocesses')
      this.router.navigate(['/home/processes/my-processes'])
    else
      this.router.navigate(['/home/processes/library'])
  }

  ngOnInit() {
    this.selectedTab = 'myprocesses';
  }

}

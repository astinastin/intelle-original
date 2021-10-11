import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-processes',
  templateUrl: './processes.page.html',
  styleUrls: ['./processes.page.scss'],
})
export class ProcessesPage implements OnInit {

  constructor(private router: Router) { }


  selectedTab: any = "myprocesses"
  segmentChanged(eve) {
    this.selectedTab = eve.detail.value
    if (this.selectedTab == 'myprocesses')
      this.router.navigate(['/home/processes/my-processes'])
    else
      this.router.navigate(['/home/processes/library'])
  }

  ngOnInit() {}

}

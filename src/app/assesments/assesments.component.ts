import { Component, OnInit, ViewChild } from '@angular/core';
import { MatStepper } from '@angular/material';

@Component({
  selector: 'app-assesments',
  templateUrl: './assesments.component.html',
  styleUrls: ['./assesments.component.scss'],
})
export class AssesmentsComponent implements OnInit {

  constructor() { }

  @ViewChild('stepper') stepper: MatStepper;

  ngOnInit() { }

  ngAfterViewInit() {
    setTimeout(() => {
      this.stepper.selectedIndex = 1;
    }, 0);
  }
}

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
  
  answers: any = [
    { id: 1, "isSelected": false, "answer": 'It Helps Individuals in Different ways' },
    { id: 2, "isSelected": false, "answer": 'It Helps Better Decision Making' },
    { id: 3, "isSelected": false, "answer": 'It Helps Individuals about what to do in our life' },
  ]

  ngOnInit() { }

  step: string = '1;'
  ionViewDidEnter() {
    this.step = '1'
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.stepper.selectedIndex = 1;
    }, 500);
  }

  nextStep() {
    this.step = '2'
  }

  selectedAns: any = {}
  checkAns(ans) {
    this.selectedAns = ans
    this.answers.forEach(element => {
      if (ans.id != element.id)
        element.isSelected = false;
    });
  }
}

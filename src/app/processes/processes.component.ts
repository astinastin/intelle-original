import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-processes',
  templateUrl: './processes.component.html',
  styleUrls: ['./processes.component.scss'],
})
export class ProcessesComponent implements OnInit {
selected_value :String = 'myprocess'
  constructor() {

    this.selected_value = 'myprocess'
   }

  ngOnInit() {
    this.selected_value = 'myprocess'
  }

}

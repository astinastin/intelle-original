import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-myprocesses',
  templateUrl: './my-processes.component.html',
  styleUrls: ['./my-processes.component.scss'],
})
export class MyprocessesComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {}

  getProcessDetails()
  {
    console.log("hit");
    
    this.router.navigate(['/home/processes/process-details'])
  }

}

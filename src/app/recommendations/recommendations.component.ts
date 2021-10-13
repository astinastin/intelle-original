import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
@Component({
  selector: 'app-recommendations',
  templateUrl: './recommendations.component.html',
  styleUrls: ['./recommendations.component.scss'],
})
export class RecommendationsComponent implements OnInit {

  constructor() { }

  @Input() type: any;
  @Input() header: any;
  @Input() elements: any;
  @Input() searching: any;
  @Input() searchObj: any;
  @Output() headerClicked = new EventEmitter();

  ngOnInit() { }

  isActivityDetailSection : boolean = false;
  selectedTab : string = '';
  searchingNow : boolean = false;
  

  switchObj: any = {}
  ngOnChanges() {
    if (this.type) {
      this.isActivityDetailSection = false;
      if (this.type.route.includes('activities') && this.type.route.includes('activity-details')) {
        this.isActivityDetailSection = true;
        this.searching = false;
      }
      else if (this.type.route.includes('activities') && !this.type.route.includes('activity-details')) {
        this.isActivityDetailSection = false;
      }
      else if (!this.type.route.includes('activities')) {
        this.isActivityDetailSection = false;
      }
    }

    if (this.searching) {
      if (this.searching.searchValue && this.searching.searchValue.length) {
        this.searchingNow = true;
        this.isActivityDetailSection = false
      }
      else
        this.searchingNow = false;
    }

    if (this.searchObj && this.searchObj.action) {
      this.isActivityDetailSection = false;
      this.searchingNow = false
      this.switchObj = this.searchObj
      console.log(this.switchObj);
      
      console.log("finalHit");
      
    }

  }

}

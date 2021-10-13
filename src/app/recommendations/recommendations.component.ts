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
  @Output() headerClicked = new EventEmitter();

  ngOnInit() { }

  showRec: boolean = false;
  isActivityDetailSection : boolean = false;
  selectedTab : string = '';
  searchingNow : boolean = false;
  ngOnChanges() {
    if (this.type) {
      this.isActivityDetailSection = false;
      if (this.type.route.includes('activities') && this.type.route.includes('activity-details')) {
        this.isActivityDetailSection = true;
        this.showRec = true;
      }
      else if (this.type.route.includes('activities') && !this.type.route.includes('activity-details')) {
        this.showRec = false;
      }
      else if (!this.type.route.includes('activities')) {
        this.showRec = true;
      }
    }

    if(this.searching)
    {
      if(this.searching.searchValue && this.searching.searchValue.length)
      this.searchingNow = true;
      else
      this.searchingNow = false;
    }

  }

}

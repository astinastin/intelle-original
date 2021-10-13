import { Component, OnInit } from '@angular/core';
import { SharedserviceService } from '../sharedservice.service';

@Component({
  selector: 'app-participants',
  templateUrl: './participants.component.html',
  styleUrls: ['./participants.component.scss'],
})
export class ParticipantsComponent implements OnInit {

  constructor(private service: SharedserviceService) { }

  contacts: any = [
    { id: 1, isSelected: false, name: 'Test User 1' },
    { id: 2, isSelected: false, name: 'Test User 2' },
    { id: 3, isSelected: false, name: 'Test User 3' },
    { id: 4, isSelected: false, name: 'Test User 4' },
    { id: 5, isSelected: false, name: 'Test User 5' },
    { id: 6, isSelected: false, name: 'Test User 6' },
    { id: 7, isSelected: false, name: 'Test User 7' },
    { id: 8, isSelected: false, name: 'Test User 8' },
    { id: 9, isSelected: false, name: 'Test User 9 ' },
    { id: 10, isSelected: false, name: 'Test User 10' },
  ]

  ngOnInit() { }

  selectedContacts: any = [];
 
  isExist(obj) {
    let found = false;
    let isExists = this.selectedContacts.find(x => x.id === obj.id);
    isExists ? found = true : found = false;
    return found;
  }

  removeItem(obj) {
    let index = this.selectedContacts.findIndex(x => x.id === obj.id);
    this.selectedContacts.splice(index, 1);
  }

  selectContact(obj) {
    if (this.isExist(obj))
      this.removeItem(obj);
    else {
      this.selectedContacts.push(obj);
    }
  }

}

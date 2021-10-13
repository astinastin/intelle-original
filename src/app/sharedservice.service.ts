import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedserviceService {

  searchObj = new Subject<any>();
  
  constructor() { }
}

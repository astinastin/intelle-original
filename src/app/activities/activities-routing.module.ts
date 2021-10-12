import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActivitiesPage } from './activities.page';
import { NewactivityComponent } from './components/newactivity/newactivity.component';
import {ActivityDetailsComponent} from './components/activityDetails/activity-details.component'
const routes: Routes = [
  {
    path: '',
    component: ActivitiesPage,
    data: { title: 'ACTIVITIES',path:'activities' }
  },
  {
    path: 'new-activity',
    component: NewactivityComponent,
    data: { title: 'NEW ACTIVITIES' }
  },
  {
    path: 'activity-details',
    component: ActivityDetailsComponent,
    data: { title: 'ACTIVITY DETAILS' ,path:'activity-details',size:{size1:'2',size2:'8',size3:'2'} }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActivitiesPageRoutingModule { }

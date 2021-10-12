import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActivitiesPageRoutingModule } from './activities-routing.module';

import { ActivitiesPage } from './activities.page';
import { AskComponent } from './components/ask/ask.component';
import { ActivityDetailsComponent } from './components/activityDetails/activity-details.component';
import { NewactivityComponent } from './components/newactivity/newactivity.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActivitiesPageRoutingModule
  ],
  declarations: [ActivitiesPage,AskComponent,ActivityDetailsComponent,NewactivityComponent]
})
export class ActivitiesPageModule {}

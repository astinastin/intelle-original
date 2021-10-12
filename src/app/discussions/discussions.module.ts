import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DiscussionsPageRoutingModule } from './discussions-routing.module';

import { DiscussionsPage } from './discussions.page';
import { SavedComponent } from './saved/saved.component';
import { AllDiscussionsComponent } from './alldiscussions/alldiscussions.component';
import { DiscussionDetailsComponent } from './components/discussion-details/discussion-details.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DiscussionsPageRoutingModule
  ],
  declarations: [DiscussionsPage,AllDiscussionsComponent,SavedComponent,DiscussionDetailsComponent]
})
export class DiscussionsPageModule {}

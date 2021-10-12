import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { RecommendationsComponent } from '../recommendations/recommendations.component';
import { DiscussionpopoverComponent } from './components/popovers/discussionpopover/discussionpopover.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage,RecommendationsComponent,DiscussionpopoverComponent]
})
export class HomePageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { RecommendationsComponent } from '../recommendations/recommendations.component';
import { DiscussionpopoverComponent } from './components/popovers/discussionpopover/discussionpopover.component';
import { SearchSuggestionsPopover } from './components/popovers/search-suggestions-popover/search-suggestions-popover.component';
import { ItelligeHomeComponent } from '../itellige-home/itellige-home.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage,RecommendationsComponent,DiscussionpopoverComponent,SearchSuggestionsPopover,ItelligeHomeComponent]
})
export class HomePageModule {}

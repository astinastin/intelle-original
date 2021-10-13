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
import {MatStepperModule  } from '@angular/material/stepper';
import { ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';
import {MatCardModule} from '@angular/material/card';
import { ContactsComponent } from '../contacts/contacts.component';

@NgModule({
  
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatRadioModule,
    MatCardModule
  ],

  declarations: [
    HomePage,
    RecommendationsComponent,
    DiscussionpopoverComponent,
    SearchSuggestionsPopover,
    ItelligeHomeComponent,
    ContactsComponent
  ]
})

export class HomePageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DiscussionsPageRoutingModule } from './discussions-routing.module';

import { DiscussionsPage } from './discussions.page';
import { SavedComponent } from './saved/saved.component';
import { AllDiscussionsComponent } from './alldiscussions/alldiscussions.component';
import { DiscussionDetailsComponent } from './components/discussion-details/discussion-details.component';
import { AskComponent } from './components/ask/ask.component';
import {MatStepperModule  } from '@angular/material/stepper';
import { ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSelectModule} from '@angular/material/select';
import { MatListModule } from '@angular/material';
import { AssesmentsComponent } from '../assesments/assesments.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatSelectModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatRadioModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    MatToolbarModule,
    MatRadioModule,
    MatStepperModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    DiscussionsPageRoutingModule,
    
  ],
  declarations: [DiscussionsPage,AllDiscussionsComponent,SavedComponent,DiscussionDetailsComponent,AskComponent,AssesmentsComponent]
})
export class DiscussionsPageModule {}

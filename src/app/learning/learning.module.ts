import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LearningPageRoutingModule } from './learning-routing.module';

import { LearningPage } from './learning.page';
import { MylearningComponent } from './mylearning/mylearning.component';
import { LearnmoreComponent } from './learnmore/learnmore.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LearningPageRoutingModule
  ],
  declarations: [LearningPage,MylearningComponent,LearnmoreComponent]
})
export class LearningPageModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LearningPage } from './learning.page';
import { LearnmoreComponent } from './learnmore/learnmore.component';
import { MylearningComponent } from './mylearning/mylearning.component';

const routes: Routes = [
  {
    path: '',
    component: LearningPage,
    children : [
      { path: 'my-learnings', component: MylearningComponent ,data: { title: 'HOME/ MY LEARNINGS' }},
      { path: 'learn-more', component: LearnmoreComponent,data: { title: 'HOME/ LEARN MORE' } },
     /*  { path: '', redirectTo: 'my-learnings', pathMatch: 'full' }, */
    ],
    
  },
  {
    path: '',
    redirectTo: 'learning',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LearningPageRoutingModule {}

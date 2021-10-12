import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllDiscussionsComponent } from './alldiscussions/alldiscussions.component';
import { DiscussionDetailsComponent } from './components/discussion-details/discussion-details.component';

import { DiscussionsPage } from './discussions.page';
import { SavedComponent } from './saved/saved.component';

const routes: Routes = [
  {
    path: '',
    component: DiscussionsPage,
    children: [
      { path: 'my-discussions', component: AllDiscussionsComponent ,data: { title: 'MY DISCUSSIONS' }},
      { path: 'discussions-details', component:DiscussionDetailsComponent  ,data: { title: 'DISCUSSIONS' }},
      { path: 'saved', component: SavedComponent,data: { title: 'SAVED DISCUSSIONS' } },
    ],

  },
  {
    path: '',
    redirectTo: 'my-discussionss',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiscussionsPageRoutingModule { }

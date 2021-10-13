import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsComponent } from '../contacts/contacts.component';
import { ItelligeHomeComponent } from '../itellige-home/itellige-home.component';
import { ParticipantsComponent } from '../participants/participants.component';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'intelligo-home',
        component:ItelligeHomeComponent
      },
      {
        path: 'contacts',
        component:ContactsComponent
      },
      {
        path: 'participants',
        component:ParticipantsComponent
      },
      {
        path: 'learning',
        loadChildren: () => import('../learning/learning.module').then(m => m.LearningPageModule),
        data: { title: 'HOME > LEARNING' }
      },
      {
        path: 'discussions',
        loadChildren: () => import('../discussions/discussions.module').then(m => m.DiscussionsPageModule),
        data: { title: 'HOME > DISCUSSIONS' }
      },

      {
        path: 'activities',
        loadChildren: () => import('../activities/activities.module').then(m => m.ActivitiesPageModule),
        data: { title: 'HOME > ACTIVITIES' }
      },
      {
        path: 'processes',
        loadChildren: () => import('../processes/processes.module').then(m => m.ProcessespageModule),
        data: { title: 'HOME > PROCESSES' }
      },
      {
        path: '',
        redirectTo:'home/intelligo-home',
        pathMatch: 'full'
      },
    ],
    data: { title: 'HOME' }
  },
  {
    path: '',
    redirectTo:'home/intelligo-home',
    pathMatch: 'full'
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule { }

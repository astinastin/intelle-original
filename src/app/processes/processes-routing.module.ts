import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyprocessesComponent } from './my-processes/my-processes.component';

import { ProcessesPage } from './processes.page';
import { LibraryComponent } from './library/library.component';

const routes: Routes = [
  {
    path: '',
    component: ProcessesPage,
    children: [
      { path: 'my-processes', component: MyprocessesComponent ,data: { title: 'HOME > PROCESSES > MY PROCESSES' }},
      { path: 'library', component: LibraryComponent,data: { title: 'HOME > PROCESSES > LIBRARY' } },
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

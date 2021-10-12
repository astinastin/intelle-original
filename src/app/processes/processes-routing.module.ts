import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyprocessesComponent } from './my-processes/my-processes.component';

import { ProcessesPage } from './processes.page';
import { LibraryComponent } from './library/library.component';
import { ProcessDetailsComponent } from './components/process-details/process-details-details.component';

const routes: Routes = [
  {
    path: '',
    component: ProcessesPage,
    children: [
      { path: 'my-processes', component: MyprocessesComponent, data: { title: 'MY PROCESSES' } },
      { path: 'library', component: LibraryComponent, data: { title: 'LIBRARY' } },
      { path: 'process-details', component: ProcessDetailsComponent, data: { title: 'PROCESS DETAILS' } },
    ],

  },
  {
    path: '',
    redirectTo: 'my-processes',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiscussionsPageRoutingModule { }

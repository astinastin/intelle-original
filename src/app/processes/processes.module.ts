import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DiscussionsPageRoutingModule } from './processes-routing.module';
import { ProcessesPage } from './processes.page';
import { LibraryComponent } from './library/library.component';
import { MyprocessesComponent } from './my-processes/my-processes.component';
import { ProcessDetailsComponent } from './components/process-details/process-details-details.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DiscussionsPageRoutingModule
  ],
  declarations: [ProcessesPage,MyprocessesComponent,LibraryComponent,ProcessDetailsComponent]
})
export class ProcessespageModule {}

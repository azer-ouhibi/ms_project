import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RendezVousRoutingModule } from './rendez-vous-routing.module';
import { RendezVousComponent } from './rendez-vous.component';
import { ShowComponent } from './show/show.component';
import { UpdateComponent } from './update/update.component';
import { AddComponent } from './add/add.component';


@NgModule({
  declarations: [
    RendezVousComponent,
    ShowComponent,
    UpdateComponent,
    AddComponent
  ],
  imports: [
    CommonModule,
    RendezVousRoutingModule
  ]
})
export class RendezVousModule { }

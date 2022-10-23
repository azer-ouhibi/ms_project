import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RendezVousRoutingModule } from './rendez-vous-routing.module';
import { RendezVousComponent } from './rendez-vous.component';
import { ShowComponent } from './show/show.component';
import { UpdateComponent } from './update/update.component';
import { AddComponent } from './add/add.component';
import { GetParentComponent } from './get-parent/get-parent.component';
import { GetChildComponent } from './get-child/get-child.component';
import { GetDetailsComponent } from './get-details/get-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    RendezVousComponent,
    ShowComponent,
    UpdateComponent,
    AddComponent,
    GetParentComponent,
    GetChildComponent,
    GetDetailsComponent
  ],
  imports: [
    CommonModule,
    RendezVousRoutingModule,
    ReactiveFormsModule,FormsModule
  ]
})
export class RendezVousModule { }

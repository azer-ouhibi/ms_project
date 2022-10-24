import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DevisRoutingModule } from './devis-routing.module';
import { DevisComponent } from './devis.component';
import { AddComponent } from './add/add.component';
import { UpdateComponent } from './update/update.component';
import { ShowComponent } from './show/show.component';
import { GetParentComponent } from './get-parent/get-parent.component';
import { GetChildComponent } from './get-child/get-child.component';
import { GetDetailsComponent } from './get-details/get-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DevisComponent,
    AddComponent,
    UpdateComponent,
    ShowComponent,
    GetParentComponent,
    GetChildComponent,
    GetDetailsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,FormsModule,

    DevisRoutingModule
  ]
})
export class DevisModule { }

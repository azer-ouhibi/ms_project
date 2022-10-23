import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReclamationRoutingModule } from './reclamation-routing.module';
import { ReclamationComponent } from './reclamation.component';
import { AddComponent } from './add/add.component';
import { UpdateComponent } from './update/update.component';
import { ShowComponent } from './show/show.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GetDetailsComponent } from './get-details/get-details.component';
import { GetParentComponent } from './get-parent/get-parent.component';
import { GetChildComponent } from './get-child/get-child.component';
import { NavBarComponent } from '../nav-bar/nav-bar.component';


@NgModule({
  declarations: [
    ReclamationComponent,
    UpdateComponent,
    AddComponent,
    ShowComponent,
    GetDetailsComponent,
    GetParentComponent,
    GetChildComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,FormsModule,
    ReclamationRoutingModule
  ]
})
export class ReclamationModule { }

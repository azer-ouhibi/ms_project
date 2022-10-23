import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReclamationRoutingModule } from './reclamation-routing.module';
import { ReclamationComponent } from './reclamation.component';
import { UpdateComponent } from './update/update.component';
import { AddComponent } from './add/add.component';
import { ShowComponent } from './show/show.component';
import { GetDetailsComponent } from './get-details/get-details.component';
import { GetParentComponent } from './get-parent/get-parent.component';
import { GetChildComponent } from './get-child/get-child.component';


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
    ReclamationRoutingModule
  ]
})
export class ReclamationModule { }

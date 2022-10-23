import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RapportRoutingModule } from './rapport-routing.module';
import { RapportComponent } from './rapport.component';
import { AddComponent } from './add/add.component';
import { ShowComponent } from './show/show.component';
import { UpdateComponent } from './update/update.component';
import { GetChildComponent } from './get-child/get-child.component';
import { GetParentComponent } from './get-parent/get-parent.component';
import { GetDetailsComponent } from './get-details/get-details.component';


@NgModule({
  declarations: [
    RapportComponent,
    AddComponent,
    ShowComponent,
    UpdateComponent,
    GetChildComponent,
    GetParentComponent,
    GetDetailsComponent
  ],
  imports: [
    CommonModule,
    RapportRoutingModule
  ]
})
export class RapportModule { }

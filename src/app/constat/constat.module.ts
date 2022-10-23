import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConstatRoutingModule } from './constat-routing.module';
import { ConstatComponent } from './constat.component';
import { AddComponent } from './add/add.component';
import { UpdateComponent } from './update/update.component';
import { ShowComponent } from './show/show.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GetDetailsComponent } from './get-details/get-details.component';
import { GetParentComponent } from './get-parent/get-parent.component';
import { GetChildComponent } from './get-child/get-child.component';


@NgModule({
  declarations: [
    ConstatComponent,
    AddComponent,
    UpdateComponent,
    ShowComponent,
    GetDetailsComponent,
    GetParentComponent,
    GetChildComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,FormsModule,
    ConstatRoutingModule
  ]
})
export class ConstatModule { }

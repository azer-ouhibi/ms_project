import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from '../not-found/not-found.component';
import { AddComponent } from './add/add.component';
import { ReclamationComponent } from './reclamation.component';
import { GetDetailsComponent } from './get-details/get-details.component';
import { GetParentComponent } from './get-parent/get-parent.component';
import { ShowComponent } from './show/show.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [ {path:'',redirectTo:'ReclamationHome',pathMatch:'full'},
{ 
  path: 'ReclamationHome', component: ReclamationComponent,
  children:[
            {path:"add", component:AddComponent},
            {path:'update/:id', component:UpdateComponent},
            {path:"show", component:ShowComponent},
            {path:"getParent", component:GetParentComponent},
            {path:"detail/:id", component:GetDetailsComponent}
            ]
},
{path:'**',component:NotFoundComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReclamationRoutingModule { }

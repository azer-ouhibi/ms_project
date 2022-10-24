import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from '../rapport/add/add.component';
import { NotFoundComponent } from '../not-found/not-found.component';
import { ShowComponent } from '../rapport/show/show.component';
import { RapportComponent } from './rapport.component';
import { GetParentComponent } from '../rapport/get-parent/get-parent.component';
import { GetDetailsComponent } from '../rapport/get-details/get-details.component';

const routes: Routes = [{path:'',redirectTo:'RapportHome',pathMatch:'full'},
{ 
  path: 'RapportHome', component: RapportComponent,
  children:[
            {path:"add", component:AddComponent},
            // {path:'update/:id', component:UpdateComponent},
            {path:"show", component:ShowComponent},
            {path:"getParent", component:GetParentComponent},
            {path:"detail/:id", component:GetDetailsComponent}
            ]
},
{path:'**',component:NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RapportRoutingModule { }

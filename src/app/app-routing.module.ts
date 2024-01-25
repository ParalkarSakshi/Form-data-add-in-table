import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDataInTableComponent } from './add-data-in-table/add-data-in-table.component';
import { AddMultipleDataComponent } from './add-multiple-data/add-multiple-data.component';


const routes: Routes = [
  {
    path:'addData',component:AddDataInTableComponent
  },
  {
    path:'addMultipleData',component:AddMultipleDataComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

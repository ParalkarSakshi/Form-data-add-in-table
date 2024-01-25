import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddDataInTableComponent } from './add-data-in-table/add-data-in-table.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { AddMultipleDataComponent } from './add-multiple-data/add-multiple-data.component';


@NgModule({
  declarations: [
    AppComponent,
    AddDataInTableComponent,
    NavbarComponent,
    AddMultipleDataComponent  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

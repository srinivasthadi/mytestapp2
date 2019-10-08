import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from './material/material.module';
import { FormdialogComponent } from './formdialog/formdialog.component';
import { DialognewComponent } from './dialognew/dialognew.component';
import { Newtest5Component } from './newtest5/newtest5.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormdialogComponent,
    DialognewComponent,
    Newtest5Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

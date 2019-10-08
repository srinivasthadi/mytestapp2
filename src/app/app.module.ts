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
import { Test4dialogComponent } from './test4dialog/test4dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormdialogComponent,
    DialognewComponent,
    Test4dialogComponent
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

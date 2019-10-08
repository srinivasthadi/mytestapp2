import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as Material from "@angular/material";

const MaterialComps = [
  Material.MatToolbarModule,
  Material.MatGridListModule,
  Material.MatFormFieldModule,
  Material.MatInputModule,
  Material.MatRadioModule,
  Material.MatSelectModule,
  Material.MatCheckboxModule,
  Material.MatDatepickerModule,
  Material.MatNativeDateModule,
  Material.MatButtonModule,
  Material.MatSnackBarModule,
  Material.MatTableModule,
  Material.MatIconModule,
  Material.MatPaginatorModule,
  Material.MatSortModule,
  Material.MatCardModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialComps
  ],
  exports: [
    MaterialComps
  ]
})
export class MaterialModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatBadgeModule} from '@angular/material/badge';
import {MatIconModule} from '@angular/material/icon';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatBadgeModule,
    MatIconModule
  ],
  exports: [
    MatBadgeModule,
    MatIconModule
  ]
})
export class MaterialModule { }

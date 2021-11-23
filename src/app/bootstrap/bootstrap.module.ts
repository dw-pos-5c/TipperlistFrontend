import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsButtonComponent } from './bs-button.component';
import { BsNavbarComponent } from './bs-navbar.component';
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    BsButtonComponent,
    BsNavbarComponent
  ],
    exports: [
        BsNavbarComponent,
        BsButtonComponent
    ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class BootstrapModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin/admin.component';
import {SharedModule} from "../shared/shared.module";
import {BootstrapModule} from "../bootstrap/bootstrap.module";


@NgModule({
  declarations: [
    AdminComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    BootstrapModule
  ]
})
export class AdminModule { }

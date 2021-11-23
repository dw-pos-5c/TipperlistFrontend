import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TipperOverviewComponent } from './tipper-overview/tipper-overview.component';
import { TipperNamesComponent } from './tipper-names/tipper-names.component';
import { TipperMatchesComponent } from './tipper-matches/tipper-matches.component';
import {BootstrapModule} from "../bootstrap/bootstrap.module";
import {FormsModule} from "@angular/forms";
import {SharedModule} from "../shared/shared.module";



@NgModule({
  declarations: [
    TipperOverviewComponent,
    TipperNamesComponent,
    TipperMatchesComponent
  ],
  imports: [
    CommonModule,
    BootstrapModule,
    FormsModule,
    SharedModule
  ]
})
export class TipperModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoalDiffPipe } from './goal-diff.pipe';
import { FilterByGroupPipe } from './filter-by-group.pipe';
import { ResultPipe } from './result.pipe';
import { FlagComponent } from './flag/flag.component';
import { MatchResultComponent } from './match-result/match-result.component';



@NgModule({
  declarations: [
    GoalDiffPipe,
    FilterByGroupPipe,
    ResultPipe,
    FlagComponent,
    MatchResultComponent
  ],
  exports: [
    FilterByGroupPipe,
    MatchResultComponent,
    GoalDiffPipe
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }

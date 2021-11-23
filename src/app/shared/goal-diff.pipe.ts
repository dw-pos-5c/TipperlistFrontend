import { Pipe, PipeTransform } from '@angular/core';
import {MatchDto} from "../models/matchdto";

@Pipe({
  name: 'goalDiff'
})
export class GoalDiffPipe implements PipeTransform {

  transform(matches: MatchDto[], minDiff: number): MatchDto[] {
    return matches.filter(x => {
      if (!x.shot || !x.received) return true;
      return Math.abs(x.shot - x.received) >= minDiff
    });
  }
}

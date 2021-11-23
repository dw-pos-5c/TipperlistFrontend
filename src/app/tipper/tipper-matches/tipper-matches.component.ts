import {Component, Input, OnInit} from '@angular/core';
import {TippsService} from "../../core/tipps.service";
import {MatchDto} from "../../models/matchdto";
import {SingleTippDto} from "../../models/singletippdto";

@Component({
  selector: 'app-tipper-matches',
  templateUrl: './tipper-matches.component.html',
  styleUrls: ['./tipper-matches.component.css']
})
export class TipperMatchesComponent implements OnInit {

  @Input() singleTipps!: SingleTippDto[];
  @Input() name!: string;

  minDiff: number;

  matches: MatchDto[] = [];

  constructor(private tippsService: TippsService) {
    this.minDiff = 0;
  }

  ngOnInit(): void {
    this.tippsService.getMatchResults().then(result => {
      this.matches = result.filter(match => {
        return !this.singleTipps.find(tipp => tipp.matchWithResultId === match.id);
      });
      console.log(this.matches);
    });
  }

  findMatch(matchWithResultId: number): MatchDto {
    return this.matches.find(x => x.id === matchWithResultId) ?? this.matches[0];
  }

  findTipp(id: number): SingleTippDto {
    return this.singleTipps.find(x => x.matchWithResultId === id) ?? this.singleTipps[0];
  }
}

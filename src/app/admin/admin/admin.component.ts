import { Component, OnInit } from '@angular/core';
import {TippsService} from "../../core/tipps.service";
import {MatchDto} from "../../models/matchdto";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  matches: MatchDto[] = [];

  constructor(private tippsService: TippsService) { }

  ngOnInit(): void {
    this.tippsService.getMatchResults().then(result => {
      this.matches = result;
    });
  }

  save(match: MatchDto, team1: number, team2: number) : void {
    match.shot = team1;
    match.received = team2;
    this.tippsService.updateMatchResult(match.id, match).then(result => console.log(result));
  }
}

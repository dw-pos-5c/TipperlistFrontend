import {Component, Input, OnInit} from '@angular/core';
import {SingleTippDto} from "../../models/singletippdto";
import {MatchDto} from "../../models/matchdto";

@Component({
  selector: 'app-match-result',
  templateUrl: './match-result.component.html',
  styleUrls: ['./match-result.component.css']
})
export class MatchResultComponent implements OnInit {

  @Input() tipp!: SingleTippDto;
  @Input() match!: MatchDto;

  constructor() { }

  ngOnInit(): void {
  }

}

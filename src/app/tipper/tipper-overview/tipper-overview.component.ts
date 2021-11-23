import { Component, OnInit } from '@angular/core';
import {TippsService} from "../../core/tipps.service";
import {TipperDto} from "../../models/tipperdto";
import {SingleTippDto} from "../../models/singletippdto";

@Component({
  selector: 'app-tipper-overview',
  templateUrl: './tipper-overview.component.html',
  styleUrls: ['./tipper-overview.component.css']
})
export class TipperOverviewComponent implements OnInit {

  tippers: TipperDto[] = [];
  buttons: string[] = ['Alle'];
  filterString: string;
  selectedTipperId!: number;

  singleTipps: SingleTippDto[] = [];

  constructor(private tippsService: TippsService) {
    this.filterString = 'Alle';
  }

  ngOnInit(): void {
    this.tippsService.getTippers().then(result => {
      this.tippers = result;
      this.initButtons();
    });
  }

  initButtons(): void {
    this.tippers.forEach(tipper => {
      const groups = tipper.groups.split(',');
      groups.forEach(group => {
        if (group.length > 0 && !this.buttons.includes(group)) {
          this.buttons.push(group);
        }
      });
    });
  }

  groupSelectionChanged($event: string) {
    this.filterString = $event;
  }

  tipperSelected($event: number): void {
    this.selectedTipperId = $event;

    this.tippsService.getTipps(this.selectedTipperId).then(result => {
      this.singleTipps = result.tipps;
    });
  }

  getTipperName(): string {
    return this.tippers.find(x => x.id === this.selectedTipperId)?.name ?? '';
  }
}

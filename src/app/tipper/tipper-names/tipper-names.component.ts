import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TipperDto} from "../../models/tipperdto";

@Component({
  selector: 'app-tipper-names',
  templateUrl: './tipper-names.component.html',
  styleUrls: ['./tipper-names.component.css']
})
export class TipperNamesComponent implements OnInit {

  @Input() tippers!: TipperDto[];
  @Input() filterString!: string;
  @Output() tipperSelected = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

}

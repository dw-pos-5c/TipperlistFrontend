import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-bs-button',
  templateUrl: './bs-button.component.html',
  styleUrls: ['./bs-button.component.css']
})
export class BsButtonComponent implements OnInit {

  @Input() groupName!: string;
  @Output() selectionChanged = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

}

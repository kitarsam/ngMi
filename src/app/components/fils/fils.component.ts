import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-fils',
  templateUrl: './fils.component.html',
  styleUrls: ['./fils.component.css'],
})
export class FilsComponent implements OnInit {
  /* On créer un event */
  @Output() sendDataToPapa = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}

  sendMessage() {
    this.sendDataToPapa.emit('cc papa');
  }
}

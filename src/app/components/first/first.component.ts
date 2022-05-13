import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
})
export class FirstComponent implements OnInit {
  @Input() name = 'aymen';
  color = 'green';
  isHidden = true;
  message = '';
  constructor() {}

  ngOnInit(): void {}
  processStafs() {
    this.name == 'mohamed' ? (this.name = 'aymen') : (this.name = 'mohamed');
    this.isHidden = !this.isHidden;
  }
  showMessage(newValue: string) {
    this.message = newValue;
  }
}

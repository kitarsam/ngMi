import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  templateUrl: './ng-style.component.html',
  styleUrls: ['./ng-style.component.css'],
})
export class NgStyleComponent implements OnInit {
  @Input() color = 'blue';
  @Input() bgc = 'yellow';
  size = '100px';
  font = 'verdana';
  constructor() {}

  ngOnInit(): void {}
}

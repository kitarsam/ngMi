import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rotating-card',
  templateUrl: './rotating-card.component.html',
  styleUrls: ['./rotating-card.component.css']
})
export class RotatingCardComponent implements OnInit {
  name = 'sellaouti';
  firstname = 'aymen';
  path = 'rotating_card_profile.png';
  constructor() { }
  ngOnInit(): void {
  }

}

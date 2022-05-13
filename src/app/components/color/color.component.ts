import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css'],
})
export class ColorComponent implements OnInit {
  defaultColor = 'lightblue';
  color = this.defaultColor;
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((mesParametres) => {
      console.log(mesParametres);

      this.defaultColor = mesParametres.myDefaultColor;
      this.color = mesParametres.myColor;
    });
  }

  changeColor(newColor: string) {
    this.color = newColor;
  }
}

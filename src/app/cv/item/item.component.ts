import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Cv } from '../model/cv';
import { CvService } from '../services/cv.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {
  @Input() cv: Cv | null = null;
  @Input() size = 50;
  /* Je vais créer un event qui envoi un cv */
  /*   @Output() selectCv = new EventEmitter<Cv>(); */
  constructor(private cvService: CvService) {}

  ngOnInit(): void {}
  sendSelectCvEvent() {
    /*     if (this.cv) this.selectCv.emit(this.cv); */
    if (this.cv) this.cvService.selectItem(this.cv);
  }
}

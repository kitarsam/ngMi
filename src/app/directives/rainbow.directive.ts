import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appRainbow]'
})
export class RainbowDirective {

  //Quels propriétés
  /* 1- color 2- borderColor */
  @HostBinding('style.color') color = '';
  @HostBinding('style.borderColor') bc = '';
  constructor() { }
  // Quel event gérer
  /* keyup */
  @HostListener('keyup') onKeyup() {
    this.color = this.getRandomColor();
    this.bc = this.getRandomColor();
  }

  private getRandomColor() {
    return '#' + Math.floor(Math.random()*16777215).toString(16);
  }
}

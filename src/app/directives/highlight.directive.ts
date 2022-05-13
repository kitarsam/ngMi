import {
  Directive,
  HostBinding,
  HostListener,
  OnInit,
  Input,
} from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective implements OnInit {
  @Input() in = 'yellow';
  @Input() out = 'red';
// Quel propriété je gére
  @HostBinding('style.backgroundColor') bgc = 'red';
  constructor() {}
  ngOnInit(): void {
    this.bgc = this.out;
  }
// Queles evenements je gére
  @HostListener('mouseenter') onMouseEnter() {
    this.bgc = this.in;
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.bgc = this.out;
  }
}

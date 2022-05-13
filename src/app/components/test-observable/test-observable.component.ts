import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-test-observable',
  templateUrl: './test-observable.component.html',
  styleUrls: ['./test-observable.component.css'],
})
export class TestObservableComponent implements OnInit {
  monObservable: Observable<number>;
  constructor(private toastr: ToastrService) {
    this.monObservable = new Observable<number>((observer) => {
      let i = 5;
      setInterval(() => {
        if (!i) {
          observer.complete();
        }
        observer.next(i--);
      }, 1000);
    });
  }

  ngOnInit(): void {
    this.monObservable.subscribe((val) => {
      console.log(val);
    });
    this.monObservable
      .pipe(
        map((valeur) => valeur * 3),
        filter((data) => data % 2 == 0)
      )
      .subscribe({
        next: (data) => {
          this.toastr.info('' + data);
        },
        complete: () => {
          this.toastr.warning('Fin du jeu Boom :)');
        },
      });
  }
}

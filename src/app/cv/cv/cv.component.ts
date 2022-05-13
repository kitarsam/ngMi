import { Component, OnInit } from '@angular/core';
import { distinctUntilChanged } from 'rxjs/operators';
import { Cv } from '../model/cv';
import { CvService } from '../services/cv.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent implements OnInit {
  /*   selectedCv: Cv | null = null; */
  date = new Date();
  nb = 0;
  cvs: Cv[] = [];
  constructor(
    private cvService: CvService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.cvService.getCvs().subscribe({
      next: (listCvs) => {
        this.cvs = listCvs;
      },
      error: () => {
        this.toastr.error(`Problème au niveau du serveur, attention les données sont fake `)
        this.cvs = this.cvService.getFakeCvs();
      }
    });
    this.cvService.selectItem$
    .pipe(distinctUntilChanged())
    .subscribe({
      next: (cv) => {this.nb++}
    });
  }
  /*   selectCv(cv: Cv) {
    this.selectedCv = cv;
  } */
}

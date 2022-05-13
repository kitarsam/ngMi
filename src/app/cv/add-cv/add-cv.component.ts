import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CvService } from '../services/cv.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ROUTES } from 'src/app/config/routes';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-cv',
  templateUrl: './add-cv.component.html',
  styleUrls: ['./add-cv.component.css'],
})
export class AddCvComponent implements OnInit {
  constructor(
    private cvService: CvService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {}
  addCv(formumaire: NgForm): void {
    /* Todo Add Cv */
    this.cvService.addCv(formumaire.value).subscribe({
      next: (cv) => {
        this.toastr.success(`Le cv a ajouté avec succès`);
        this.router.navigate([ROUTES.cv]);
      },
      error: () => {
        this.toastr.error('Veuillez contacter l admin');
      },
    });
  }
}

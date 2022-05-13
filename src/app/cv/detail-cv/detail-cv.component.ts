import { Component, OnInit } from '@angular/core';
import { Cv } from '../model/cv';
import { ActivatedRoute, Router } from '@angular/router';
import { CvService } from '../services/cv.service';
import { ROUTES } from 'src/app/config/routes';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../auth/services/auth.service';

@Component({
  selector: 'app-detail-cv',
  templateUrl: './detail-cv.component.html',
  styleUrls: ['./detail-cv.component.css'],
})
export class DetailCvComponent implements OnInit {
  cv: Cv | null = null;
  constructor(
    private activatedRoute: ActivatedRoute,
    private cvService: CvService,
    private router: Router,
    private tostr: ToastrService,
    public authService: AuthService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.cvService.getCvById(params.id).subscribe({
        next: (cv) => { this.cv = cv;},
        error: (e) => {this.router.navigate([ROUTES.cv]);}
      });
    });
  }
  delete() {
    if (this.cv) {
      this.cvService.deleteCv(this.cv.id).subscribe({
        next: () => {
          this.tostr.success('cv supprimé avec succès');
          this.router.navigate([ROUTES.cv]);
        },
        error: (e) => {
          this.tostr.error('Veuillez contacter l admin');
          console.log(e);
        }
      });

    }
  }
}

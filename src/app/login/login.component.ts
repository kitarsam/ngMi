import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CredentialsDto } from '../auth/dto/credentials.dto';
import { ROUTES } from './../config/routes';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private router: Router,
    private toaster: ToastrService
  ) {}

  ngOnInit(): void {}
  login(credentials: CredentialsDto) {
    this.authService.login(credentials).subscribe({
      next: (data) => {
        localStorage.setItem('token', data.id);
        this.router.navigate([ROUTES.cv]);
      },
      error: () => {
        this.toaster.error('Veuillez vérifiez vos credentials');
      },
    });
  }
}

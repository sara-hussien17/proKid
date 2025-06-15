import { Router } from '@angular/router';
import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../core/services/authentication/auth.service';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  private readonly _AuthService = inject(AuthService);
  private readonly _Router = inject(Router);
  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [
      Validators.required,
      Validators.pattern(
        '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[\\w@$!%*?&]{8,}$'
      ),
    ]),
  });

  login(): void {
    if (this.loginForm.valid) {
      console.log(this.loginForm);
      this._AuthService.Login(this.loginForm.value).subscribe({
        next: (res) => {
          console.log(res);
          sessionStorage.setItem('token', res.token);
          this._AuthService.decodeToken();
          this._Router.navigate(['/courses']);
        },
        error: (err) => {
          console.log(err);
          console.log(err.error.message);
        },
      });
    } else {
      this.loginForm.markAllAsTouched();
    }
  }
}

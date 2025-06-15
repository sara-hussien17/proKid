import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/authentication/auth.service';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  private readonly _AuthService = inject(AuthService);
  private readonly _Router = inject(Router);
  resText!: string;

  sRegisterForm: FormGroup = new FormGroup({
    firstName: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(10),
    ]),
    lastName: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(10),
    ]),
    age: new FormControl(null, [
      Validators.required,
      Validators.min(7),
      Validators.max(14),
    ]),
    parentNumber: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^01[0125][0-9]{8}$/),
    ]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [
      Validators.required,
      Validators.pattern(
        '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[\\w@$!%*?&]{8,}$'
      ),
    ]),
  });

  Register(): void {
    if (this.sRegisterForm.valid) {
      console.log(this.sRegisterForm);
      this._AuthService.Register(this.sRegisterForm.value).subscribe({
        next: (res) => {
          console.log(res);
          this._Router.navigate(['/login']);
        },
        error: (err) => {
          console.log(err);
        },
      });
    } else {
      this.sRegisterForm.markAllAsTouched();
    }
  }
}

import { NgClass } from '@angular/common';
import { Component, OnDestroy, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { Router, RouterLink } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass, RouterLink, TranslateModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnDestroy {
  private readonly _AuthService = inject(AuthService);
  private readonly _FormBuilder = inject(FormBuilder);
  private readonly _Router = inject(Router);
  cleanAuthService!: Subscription;
  msgError: string = '';

  isLoading: boolean = false;

  loginfom: FormGroup = this._FormBuilder.group({
    email: [null, [Validators.required, Validators.email]],
    password: [null, [Validators.required, Validators.pattern(/^\w{6,}$/)]],
  });
  loginSubmit(): void {
    if (this.loginfom.valid) {
      this.isLoading = true;
      this._AuthService.setLoginForm(this.loginfom.value).subscribe({
        next: (res) => {
          console.log(res);

          if (res.message == 'success') {
            localStorage.setItem('userName', res.token);
            this._AuthService.saveUserDate();
            this._Router.navigate(['/home']);
          }

          this.isLoading = false;
        },
        error: (err: HttpErrorResponse) => {
          this.msgError = err.error.message;
          console.log(err);
          this.isLoading = false;
        },
      });
    } else {
      this.loginfom.markAllAsTouched();
    }
  }

  ngOnDestroy(): void {
    this.cleanAuthService?.unsubscribe();
  }
}

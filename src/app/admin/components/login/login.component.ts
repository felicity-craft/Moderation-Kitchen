import { Component} from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  public showLoginError: boolean = false;

  public get emailControl(): AbstractControl {
    return this.formGroup.get('email') as AbstractControl;
  }
  public get passwordControl(): AbstractControl {
    return this.formGroup.get('password') as AbstractControl;
  }

  public formGroup: FormGroup;

  constructor(
    private auth: AuthenticationService,
    private router: Router,
    fb: FormBuilder
  ) {
    this.formGroup = fb.group({
      email: [null, [Validators.email, Validators.required]],
      password: [null, [Validators.required]],
    });
  }

  loginUser() {
    const isLoggedIn = this.auth.loginUser(
      this.emailControl.value,
      this.passwordControl.value
    );
    if (isLoggedIn) {
      window.location.href = '/admin';
    } else {
      this.showLoginError = true;
    }
  }
}

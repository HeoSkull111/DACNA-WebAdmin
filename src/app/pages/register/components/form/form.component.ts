import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
  type OnInit,
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormGroupDirective,
  NgForm,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { MaterialModule } from 'src/app/modules/material/material.module';

import { passwordMatchingValidatior } from '../../helper/validatePassword';
import { RegisterModel } from '@models/user.model';

@Component({
  selector: 'register-form',
  standalone: true,
  imports: [CommonModule, MaterialModule, ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterFormComponent implements OnInit {
  showPassword = false;
  showConfirmPassword = false;

  registerForm = new FormGroup(
    {
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(20),
      ]),
      confirmPassword: new FormControl('', [Validators.required]),
      firstName: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(20),
      ]),
      lastName: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(30),
      ]),
    },
    { validators: passwordMatchingValidatior }
  );

  @Output() register = new EventEmitter<RegisterModel>();

  isSubmitted = false;

  ngOnInit(): void {}

  get email() {
    return this.registerForm.get('email');
  }

  get password() {
    return this.registerForm.get('password');
  }

  get confirmPassword() {
    return this.registerForm.get('confirmPassword');
  }

  get firstName() {
    return this.registerForm.get('firstName');
  }

  get lastName() {
    return this.registerForm.get('lastName');
  }

  passwordErrorMatcher = {
    isErrorState: (control: FormControl, form: FormGroupDirective): boolean => {
      const controlInvalid = control.touched && control.invalid;
      const formInvalid =
        control.touched &&
        this.registerForm.get('confirmPassword')!.touched &&
        this.registerForm.invalid;
      return controlInvalid || formInvalid;
    },
  };

  comfirmPasswordErrorMatcher = {
    isErrorState: (control: FormControl, form: FormGroupDirective): boolean => {
      const controlInvalid = control.touched && control.invalid;
      const formInvalid =
        control.touched &&
        this.registerForm.get('password')!.touched &&
        this.registerForm.invalid;
      return controlInvalid || formInvalid;
    },
  };

  submit() {
    this.registerForm.markAsTouched();

    if (this.registerForm.valid) {
      const { email, password, firstName, lastName } = this.registerForm.value;

      if (email && password && firstName && lastName) {
        const registerModel: RegisterModel = {
          email,
          password,
          firstName,
          lastName,
        };

        this.register.emit(registerModel);
      }
    }
  }
}

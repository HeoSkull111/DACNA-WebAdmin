import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { ServerResponse } from 'src/app/models/http-response.model';

import { RegisterFormComponent } from '../../components/form/form.component';
import { UserService } from '@services/user.service';
import { RegisterModel } from '@models/user.model';

@Component({
  selector: 'register-main',
  standalone: true,
  imports: [CommonModule, RegisterFormComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterMainComponent {
  constructor(private registerService: UserService) {}

  notificationMessage$ = new BehaviorSubject<string>('');
  notificationTitle$ = new BehaviorSubject<string>('');
  notificationType$ = new BehaviorSubject<
    'info' | 'warning' | 'error' | 'success'
  >('info');

  registerUserSuccesfully = (response: ServerResponse) => {
    this.notificationMessage$.next(response.message);

    if (response.status === 201) {
      this.notificationTitle$.next('Success');
      this.notificationMessage$.next('User registered successfully');
      this.notificationType$.next('success');
    }
  };

  registerUserFailed = (response: ServerResponse) => {
    this.notificationMessage$.next(response.message);

    this.notificationTitle$.next('Error');
    this.notificationMessage$.next(response.message);
    this.notificationType$.next('error');
  };

  registerUser(user: RegisterModel) {
    const registerUserSubscription = this.registerService
      .registerUser(user)
      .subscribe({
        next: this.registerUserSuccesfully,
        error: this.registerUserFailed,
        complete: () => {
          registerUserSubscription.unsubscribe();
        },
      });
  }
}

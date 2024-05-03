import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ViewChild,
  type OnInit,
} from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

import { NotificationDialogComponent } from 'src/app/components/notification-dialog/notification-dialog.component';
import { ServerResponse } from 'src/app/models/http-response.model';

import { LoginFormComponent } from '../../components/form/form.component';
import { UserService } from '@services/user.service';
import { LoginModel } from '@models/user.model';

@Component({
  selector: 'login-main',
  standalone: true,
  imports: [CommonModule, NotificationDialogComponent, LoginFormComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginMainComponent implements OnInit {
  constructor(private loginService: UserService, private router: Router) {}

  @ViewChild('notificationDialog') notificationDialog:
    | NotificationDialogComponent
    | undefined;

  notificationMessage$ = new BehaviorSubject<string>('');
  notificationTitle$ = new BehaviorSubject<string>('');
  notificationType$ = new BehaviorSubject<
    'info' | 'warning' | 'error' | 'success'
  >('info');

  ngOnInit(): void {}

  loginUserSuccesfully = (response: ServerResponse) => {
    this.notificationMessage$.next(response.message);

    if (response.status === 200) {
      this.notificationTitle$.next('Success');
      this.notificationMessage$.next('User logged in successfully');
      this.notificationType$.next('success');
      this.notificationDialog?.showDialog();

      setTimeout(() => {
        this.router.navigate(['main']);
      }, 1000);
    }
  };

  loginUserFailed = (response: ServerResponse) => {
    this.notificationMessage$.next(response.message);

    this.notificationTitle$.next('Error');
    this.notificationMessage$.next(response.message);
    this.notificationType$.next('error');
    this.notificationDialog?.showDialog();
  };

  loginUser(user: LoginModel) {
    const loginUserSubscription = this.loginService.loginUser(user).subscribe({
      next: this.loginUserSuccesfully,
      error: this.loginUserFailed,
      complete: () => {
        loginUserSubscription.unsubscribe();
      },
    });
  }
}

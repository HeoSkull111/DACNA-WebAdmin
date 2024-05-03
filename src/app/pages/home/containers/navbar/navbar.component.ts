import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ViewChild,
  type OnInit,
} from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

import { UserService } from '@services/user.service';
import { User } from '@models/user.model';

import { AvatarComponent } from '../../components/avatar/avatar.component';
import { DialogComponent } from 'src/app/components/dialog/dialog.component';
import { NotificationDialogComponent } from 'src/app/components/notification-dialog/notification-dialog.component';

@Component({
  selector: 'home-navbar',
  standalone: true,
  imports: [
    CommonModule,
    AvatarComponent,
    DialogComponent,
    NotificationDialogComponent,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeNavbarComponent implements OnInit {
  @ViewChild('dialog') dialog: DialogComponent | undefined;
  @ViewChild('logoutNotificationDialog') logoutNotificationDialog:
    | NotificationDialogComponent
    | undefined;
  @ViewChild('logoutErrorDialog') logoutErrorDialog:
    | NotificationDialogComponent
    | undefined;

  user$ = new BehaviorSubject<User | null>(null);

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.userService.getUserData().subscribe((res) => {
      const data = res.data;

      const user: User = {
        id: data.id,
        email: data.email,
        firstName: data.first_name,
        lastName: data.last_name,
        photoUrl: data.photo_url,
        githubID: data.github_id,
        googleID: data.google_id,
      };

      this.user$.next(user);
    });
  }

  ngAfterViewInit(): void {}

  handleLogout() {
    this.dialog?.showDialog();
  }

  handleConfirmLogout() {
    this.userService.logoutUser().subscribe((res) => {
      if (res.status === 200) {
        this.logoutNotificationDialog?.showDialog();

        setTimeout(() => {
          this.handleLogoutComplete();
        }, 1000);
      } else {
        this.logoutErrorDialog?.showDialog();
      }
    });
  }

  handleLogoutComplete() {
    this.router.navigate(['/login']);
  }
}

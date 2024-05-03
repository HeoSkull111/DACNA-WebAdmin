import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';

import { SidebarButtonComponent } from '../../components/sidebar-button/sidebar-button.component';
import { IconButtonComponent } from 'src/app/components/icon-button/icon-button.component';

import { BehaviorSubject } from 'rxjs';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'home-sidebar',
  standalone: true,
  imports: [CommonModule, SidebarButtonComponent, IconButtonComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeSidebarComponent implements OnInit {
  currentRoute: string = 'dashboard';

  constructor(private router: Router) {}

  isMinimized$ = new BehaviorSubject<boolean | null>(null);

  sidebarButtons = [
    { label: 'Dashboard', icon: 'home', route: 'dashboard' },
    { label: 'Quản lý nhân sự', icon: 'list', route: 'employees' },
    { label: 'Quản lý quân quyền', icon: 'description', route: 'permissions' },
    { label: 'Quản lý yêu cầu', icon: 'analytics', route: 'requests' },
  ];

  ngOnInit(): void {
    this.currentRoute = this.router.url.split('/')[2];

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isMinimized$.next(this.isMinimized$.value || null);
        this.currentRoute = event.url.split('/')[2];
      }
    });
  }

  navigateTo(route: string): void {
    this.router.navigate(['main', route]);
  }

  changeState(): void {
    if (this.isMinimized$.value === null) {
      this.isMinimized$.next(true);
    } else {
      this.isMinimized$.next(!this.isMinimized$.value);
    }
  }
}

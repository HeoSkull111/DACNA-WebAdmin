import { CommonModule } from '@angular/common';
import {
  CUSTOM_ELEMENTS_SCHEMA,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
  type OnInit,
} from '@angular/core';

import '@material/web/menu/menu';
import '@material/web/menu/menu-item';
import '@material/web/divider/divider';

import { Menu } from '@material/web/menu/menu';

import { ButtonComponent } from 'src/app/components/button/button.component';
import { DialogComponent } from 'src/app/components/dialog/dialog.component';
import { FilledButtonComponent } from 'src/app/components/filled-button/filled-button.component';

@Component({
  selector: 'home-avatar',
  standalone: true,
  imports: [
    CommonModule,
    ButtonComponent,
    FilledButtonComponent,
    DialogComponent,
  ],
  templateUrl: './avatar.component.html',
  styleUrl: './avatar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AvatarComponent implements OnInit {
  @Input() src: string | undefined = '';

  @Output('logout') onLogout = new EventEmitter<void>();
  @Output('account') onAccount = new EventEmitter<void>();

  @ViewChild('avatar') avatar!: ElementRef<HTMLSpanElement>;
  @ViewChild('menu') menu!: ElementRef<Menu>;

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    if (this.avatar) {
      this.avatar.nativeElement.addEventListener('click', () => {
        this.menu.nativeElement.open = !this.menu.nativeElement.open;
      });
    }
  }

  account() {
    this.onAccount.emit();
  }

  logout() {
    this.onLogout.emit();
  }
}

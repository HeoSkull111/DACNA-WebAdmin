import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

import { RegisterFormComponent } from '../../components/form/form.component';

@Component({
  selector: 'register-main',
  standalone: true,
  imports: [CommonModule, RegisterFormComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterMainComponent {}

import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

import { RegisterMainComponent } from './containers/main/main.component';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, RegisterMainComponent],
  template: `<register-main></register-main>`,
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterComponent {}

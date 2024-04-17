import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';

@Component({
  selector: 'register-platform',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './platform.component.html',
  styleUrl: './platform.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterPlatformComponent implements OnInit {
  ngOnInit(): void {}
}

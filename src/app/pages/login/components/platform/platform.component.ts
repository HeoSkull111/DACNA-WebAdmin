import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';

@Component({
  selector: 'app-platform',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './platform.component.html',
  styleUrl: './platform.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlatformComponent implements OnInit {

  ngOnInit(): void { }

}

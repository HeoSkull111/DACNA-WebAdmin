import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';

@Component({
  selector: 'group-requests',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './requests.component.html',
  styleUrl: './requests.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RequestsComponent implements OnInit {
  ngOnInit(): void {}
}

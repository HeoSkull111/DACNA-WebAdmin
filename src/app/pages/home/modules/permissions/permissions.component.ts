import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';

@Component({
  selector: 'app-permissions',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './permissions.component.html',
  styleUrl: './permissions.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PermissionsComponent implements OnInit {

  ngOnInit(): void { }

}

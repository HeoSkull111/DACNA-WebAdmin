import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  type OnInit,
} from '@angular/core';

import { MaterialModule } from 'src/app/modules/material/material.module';

import { User } from '@models/user.model';

@Component({
  selector: 'information-member-detail',
  standalone: true,
  imports: [CommonModule, MaterialModule],
  templateUrl: './member-detail.component.html',
  styleUrl: './member-detail.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MemberDetailComponent implements OnInit {
  @Input() user: User | null = null;
  ngOnInit(): void {}
}

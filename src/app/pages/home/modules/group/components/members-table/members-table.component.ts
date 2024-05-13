import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  type OnInit,
} from '@angular/core';
import { MaterialModule } from 'src/app/modules/material/material.module';

import { GroupMember } from '@pages/home/models/member.model';

@Component({
  selector: 'information-members-table',
  standalone: true,
  imports: [CommonModule, MaterialModule],
  templateUrl: './members-table.component.html',
  styleUrl: './members-table.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MembersTableComponent implements OnInit {
  @Input() members: GroupMember[] = [];
  @Output() memberSelected = new EventEmitter<string>();

  ngOnInit(): void {}

  displayedColumns: string[] = ['First Name', 'Last Name', 'Role', 'Actions'];

  selectMember(memberId: string): void {
    this.memberSelected.emit(memberId);
  }
}

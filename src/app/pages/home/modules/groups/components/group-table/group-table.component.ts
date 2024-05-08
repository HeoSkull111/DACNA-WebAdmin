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

import { Group } from '../../models/group.model';

@Component({
  selector: 'group-table',
  standalone: true,
  imports: [CommonModule, MaterialModule],
  templateUrl: './group-table.component.html',
  styleUrl: './group-table.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GroupTableComponent implements OnInit {
  @Input() groups: Group[] | null = null;
  @Input() totalGroups = 5;

  @Output() onGroupSelected = new EventEmitter<string>();

  displayedColumns: string[] = ['name', 'description', 'actions'];

  ngOnInit(): void {}

  goToGroup(id: string): void {
    this.onGroupSelected.emit(id);
  }
}

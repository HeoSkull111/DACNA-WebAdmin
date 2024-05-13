import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { LetDirective } from '@ngrx/component';
import { Observable, map } from 'rxjs';

//Material
import { MaterialModule } from 'src/app/modules/material/material.module';
import { MatDialog } from '@angular/material/dialog';

//components
import { GroupTableComponent } from '../../components/group-table/group-table.component';
import { CreateGroupDialogComponent } from '../../components/create-group-dialog/create-group-dialog.component';

// models
import { Group } from '../../../../models/group.model';
import { GroupsState } from '@pages/home/ngrx/groups/groups.state';
import { GroupsActions } from '@pages/home/ngrx/groups/groups.actions';

@Component({
  selector: 'group-main',
  standalone: true,
  imports: [CommonModule, LetDirective, MaterialModule, GroupTableComponent],
  templateUrl: './group-main.component.html',
  styleUrl: './group-main.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GroupMainComponent implements OnInit {
  groupsState$!: Observable<GroupsState>;

  constructor(
    private router: Router,
    private dialog: MatDialog,
    private store: Store<{ groups: GroupsState }>
  ) {}

  ngOnInit(): void {
    this.store.dispatch(GroupsActions.loadGroups({}));
    this.groupsState$ = this.store.select((state) => state.groups);
  }

  handleGroupSelected(id: string): void {
    this.router.navigate([`main/group/${id}`]);
  }

  handleAddGroup(): void {
    const createGroupDialogRef = this.dialog.open(CreateGroupDialogComponent, {
      width: '400px',
      data: { name: '', description: '' },
    });

    createGroupDialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.store.dispatch(
          GroupsActions.addGroup({
            name: result.name,
            description: result.description,
          })
        );
      }
    });
  }
}

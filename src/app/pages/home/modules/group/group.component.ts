import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Store } from '@ngrx/store';
import { LetDirective } from '@ngrx/component';

import { Observable } from 'rxjs';

import { MaterialModule } from 'src/app/modules/material/material.module';
import { MatDialog } from '@angular/material/dialog';

//components
import { InformationsComponent } from './containers/information/information.component';
import { RequestsComponent } from './containers/requests/requests.component';
import { SettingsComponent } from './containers/settings/settings.component';

// models
import { GroupsState } from '@pages/home/ngrx/groups/groups.state';
import { GroupsActions } from '@pages/home/ngrx/groups/groups.actions';
import { GroupQRComponent } from './components/GroupQR/GroupQR.component';

@Component({
  selector: 'app-group',
  standalone: true,
  imports: [
    CommonModule,
    MaterialModule,
    LetDirective,
    InformationsComponent,
    RequestsComponent,
    SettingsComponent,
  ],
  templateUrl: './group.component.html',
  styleUrl: './group.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GroupComponent implements OnInit {
  groupID?: string;
  groupsState$!: Observable<GroupsState>;

  constructor(
    private router: Router,
    private dialog: MatDialog,
    private store: Store<{ groups: GroupsState }>
  ) {}

  tabs = [
    { label: 'Information', icon: 'group', component: InformationsComponent },
    { label: 'Requests', icon: 'edit', component: RequestsComponent },
    { label: 'Settings', icon: 'settings', component: SettingsComponent },
  ];

  ngOnInit(): void {
    this.groupID = this.router.url.split('/').pop();

    if (this.groupID) {
      this.store.dispatch(GroupsActions.loadGroup({ group_id: this.groupID }));
    }

    this.groupsState$ = this.store.select((state) => state.groups);
  }

  onCreateQRCode(): void {
    this.dialog.open(GroupQRComponent, {
      data: {
        groupName: 'Group',
        qrCode: this.groupID,
      },
    });
  }
}

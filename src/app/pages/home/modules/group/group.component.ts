import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Store } from '@ngrx/store';
import { LetDirective } from '@ngrx/component';

import { Observable, Subscription, lastValueFrom } from 'rxjs';

import { MaterialModule } from 'src/app/modules/material/material.module';
import { MatDialog } from '@angular/material/dialog';

//components
import { MembersComponent } from './containers/members/members.component';
import { StatusComponent } from './containers/status/status.component';
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
    MembersComponent,
    StatusComponent,
    RequestsComponent,
    SettingsComponent,
  ],
  templateUrl: './group.component.html',
  styleUrl: './group.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GroupComponent implements OnInit {
  groupsState$!: Observable<GroupsState>;

  groupStateSubscription: Subscription | null = null;
  groupsState: GroupsState | null = null;

  constructor(
    private router: Router,
    private dialog: MatDialog,
    private store: Store<{ groups: GroupsState }>
  ) {}

  tabs = [
    { label: 'Members', icon: 'group', component: MembersComponent },
    { label: 'Status', icon: 'info', component: StatusComponent },
    { label: 'Requests', icon: 'edit', component: RequestsComponent },
    { label: 'Settings', icon: 'settings', component: SettingsComponent },
  ];

  ngOnInit(): void {
    const groupID = this.router.url.split('/').pop();

    if (groupID) {
      this.store.dispatch(GroupsActions.loadGroup({ group_id: groupID }));
    }

    this.groupsState$ = this.store.select((state) => state.groups);
    this.groupStateSubscription = this.groupsState$.subscribe((state) => {
      this.groupsState = state;
    });
  }

  ngOnDestroy(): void {
    this.groupStateSubscription?.unsubscribe();
  }

  onCreateQRCode(): void {
    this.dialog.open(GroupQRComponent, {
      data: {
        groupName: this.groupsState?.currentGroup?.name || 'Unknown Group',
        qrCode: this.groupsState?.currentGroup?.id,
      },
    });
  }
}

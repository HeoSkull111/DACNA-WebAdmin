import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Store } from '@ngrx/store';
import { LetDirective } from '@ngrx/component';

import { Observable, lastValueFrom } from 'rxjs';

import { MatDialog } from '@angular/material/dialog';

import { MembersTableComponent } from '../../components/members-table/members-table.component';
import { MemberDetailComponent } from '../../components/member-detail/member-detail.component';

import { GroupMember } from '@pages/home/models/member.model';
import { MembersState } from '@pages/home/ngrx/members/members.state';
import { MembersActions } from '@pages/home/ngrx/members/members.actions';

@Component({
  selector: 'group-informations',
  standalone: true,
  imports: [
    CommonModule,
    LetDirective,
    MembersTableComponent,
    MemberDetailComponent,
  ],
  templateUrl: './information.component.html',
  styleUrl: './information.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InformationsComponent implements OnInit {
  groupID?: string;

  members: GroupMember[] = [];
  membersState$!: Observable<MembersState>;

  constructor(
    private router: Router,
    private dialog: MatDialog,
    private store: Store<{ members: MembersState }>
  ) {}

  ngOnInit(): void {
    this.groupID = this.router.url.split('/').pop();
    this.store.dispatch(
      MembersActions.loadMembers({ group_id: this.groupID! })
    );
    this.membersState$ = this.store.select((state) => state.members);
  }

  async handleMemberSelected(id: string): Promise<void> {
    this.store.dispatch(
      MembersActions.loadMember({ group_id: this.groupID!, member_id: id })
    );

    const stateSubscription = this.membersState$.subscribe((state) => {
      if (state.isLoading) return;

      const currentSelectedMember = state.currentSelectedMember;

      this.dialog.open(MemberDetailComponent, {
        data: currentSelectedMember,
        enterAnimationDuration: 300,
        exitAnimationDuration: 300,
      });

      stateSubscription.unsubscribe();
    });
  }
}

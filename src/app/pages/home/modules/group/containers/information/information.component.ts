import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  ViewChild,
  type OnInit,
} from '@angular/core';
import { BehaviorSubject, lastValueFrom } from 'rxjs';

import { MembersTableComponent } from '../../components/members-table/members-table.component';
import { MemberDetailComponent } from '../../components/member-detail/member-detail.component';

import { GroupMember } from '../../models/member.model';
import { User } from '@models/user.model';
import { UserService } from '@services/user.service';

@Component({
  selector: 'group-informations',
  standalone: true,
  imports: [CommonModule, MembersTableComponent, MemberDetailComponent],
  templateUrl: './information.component.html',
  styleUrl: './information.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InformationsComponent implements OnInit {
  members: GroupMember[] = [];

  currentSelectedMember$ = new BehaviorSubject<User | null>(null);

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.members = [
      {
        user: {
          id: '1',
          email: 'johndoe@gmail.com',
          firstName: 'John',
          lastName: 'Doe',
          photoUrl: '',
        },
        role: 'Admin',
      },
      {
        user: {
          id: '2',
          email: 'goldenfealla@gmail.com',
          firstName: 'Golden',
          lastName: 'Fealla',
          photoUrl: '',
        },
        role: 'Member',
      },
      {
        user: {
          id: '3',
          email: 'anteemo@gmail.com',
          firstName: 'An',
          lastName: 'Teemo',
          photoUrl: '',
        },
        role: 'Member',
      },
      {
        user: {
          id: '4',
          email: 'heoskull@gmail.com',
          firstName: 'Heo',
          lastName: 'Skull',
          photoUrl: '',
        },
        role: 'Member',
      },
      {
        user: {
          id: '5',
          email: 'phatnucnuc@gmail.com',
          firstName: 'Phat',
          lastName: 'NucNuc',
          photoUrl: '',
        },
        role: 'Member',
      },
    ];
  }

  async handleMemberSelected(id: string): Promise<void> {
    const data = await lastValueFrom(this.userService.getUserByIDTest(id));
    this.currentSelectedMember$.next(data.data);
  }
}

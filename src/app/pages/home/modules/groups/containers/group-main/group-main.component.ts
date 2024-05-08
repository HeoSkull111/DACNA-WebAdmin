import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';

import { Group } from '../../models/group.model';

import { GroupTableComponent } from '../../components/group-table/group-table.component';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'group-main',
  standalone: true,
  imports: [CommonModule, GroupTableComponent],
  templateUrl: './group-main.component.html',
  styleUrl: './group-main.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GroupMainComponent implements OnInit {
  groups: Group[] | null = null;
  isLoading$ = new BehaviorSubject<boolean>(false);

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.groups = [
      {
        id: '1',
        name: 'Group 1',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec odio nec urna tincidunt lacinia. Nulla facilisi',
      },
      {
        id: '2',
        name: 'Group 2',
        description:
          'Description 2 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec odio nec urna tincidunt lacinia. Nulla facilisi Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec odio nec urna tincidunt lacinia. Nulla facilisi',
      },
      {
        id: '3',
        name: 'Group 3',
        description:
          'Description 3 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec odio nec urna tincidunt lacinia. Nulla facilisi',
      },
      {
        id: '4',
        name: 'Group 4',
        description:
          'Description 4 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec odio nec urna tincidunt lacinia. Nulla facilisi',
      },
      {
        id: '5',
        name: 'Group 5',
        description: 'Description 5   ',
      },
    ];
  }

  handleGroupSelected(id: string): void {
    this.router.navigate([`main/group/${id}`]);
  }
}

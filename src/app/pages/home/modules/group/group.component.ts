import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';

import { MaterialModule } from 'src/app/modules/material/material.module';

import { Group } from '../groups/models/group.model';

//components
import { InformationsComponent } from './containers/information/information.component';
import { RequestsComponent } from './containers/requests/requests.component';
import { SettingsComponent } from './containers/settings/settings.component';

@Component({
  selector: 'app-group',
  standalone: true,
  imports: [
    CommonModule,
    MaterialModule,
    InformationsComponent,
    RequestsComponent,
    SettingsComponent,
  ],
  templateUrl: './group.component.html',
  styleUrl: './group.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GroupComponent implements OnInit {
  group: Group | null = null;

  tabs = [
    { label: 'Information', icon: 'group', component: InformationsComponent },
    { label: 'Requests', icon: 'edit', component: RequestsComponent },
    { label: 'Settings', icon: 'settings', component: SettingsComponent },
  ];

  ngOnInit(): void {
    this.group = {
      id: '1',
      name: 'Group 1',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec odio nec urna tincidunt lacinia. Nulla facilisi',
    };
  }

  ngAfterViewInit(): void {}
}

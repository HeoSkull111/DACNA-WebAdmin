import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  type OnInit,
} from '@angular/core';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MaterialModule } from 'src/app/modules/material/material.module';

import { CreateGroupDialogData } from '../../models/groups-dialog.model';

@Component({
  selector: 'app-create-group-dialog',
  standalone: true,
  imports: [CommonModule, FormsModule, MaterialModule],
  templateUrl: './create-group-dialog.component.html',
  styleUrl: './create-group-dialog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateGroupDialogComponent implements OnInit {
  constructor(
    private dialogRef: MatDialogRef<CreateGroupDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: CreateGroupDialogData
  ) {}

  ngOnInit(): void {}

  onCancleClick(): void {
    this.dialogRef.close();
  }
}

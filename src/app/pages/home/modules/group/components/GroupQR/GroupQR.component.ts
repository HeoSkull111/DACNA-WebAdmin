import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  type OnInit,
} from '@angular/core';

import { MaterialModule } from 'src/app/modules/material/material.module';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-group-qr',
  standalone: true,
  imports: [CommonModule, MaterialModule],
  templateUrl: './GroupQR.component.html',
  styleUrl: './GroupQR.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GroupQRComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<GroupQRComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: {
      groupName: string;
      qrCode: string;
    }
  ) {}

  ngOnInit(): void {}

  onOkClick(): void {
    this.dialogRef.close();
  }
}

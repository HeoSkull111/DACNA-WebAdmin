import { CommonModule } from '@angular/common';
import {
  CUSTOM_ELEMENTS_SCHEMA,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
  type OnInit,
} from '@angular/core';

import '@material/web/dialog/dialog';
import { MdDialog } from '@material/web/dialog/dialog';
import '@material/web/button/filled-button';
import '@material/web/icon/icon';

@Component({
  selector: 'app-notification-dialog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './notification-dialog.component.html',
  styleUrl: './notification-dialog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class NotificationDialogComponent implements OnInit {
  @Input() message: string = 'message test';
  @Input() title: string = 'title test';
  @Input() type: 'info' | 'warning' | 'error' | 'success' = 'info';

  @Output() completed = new EventEmitter<void>();

  @ViewChild('dialog') _dialogRef: ElementRef<MdDialog> | undefined;

  ngOnInit(): void {}

  showDialog() {
    if (!this._dialogRef?.nativeElement) return;
    this._dialogRef?.nativeElement.show();
  }

  complete() {
    this._dialogRef?.nativeElement.close();
    this.completed.emit();
  }
}

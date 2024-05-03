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
import '@material/web/button/outlined-button';
import '@material/web/icon/icon';

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DialogComponent implements OnInit {
  @Input() message: string = 'message test';
  @Input() title: string = 'title test';
  @Input() type: 'info' | 'warning' | 'error' | 'success' = 'info';

  @Input() cancleText: string = 'Cancle';
  @Input() confirmText: string = 'Confirm';

  @Output() confirm = new EventEmitter<void>();

  @ViewChild('dialog') _dialogRef: ElementRef<MdDialog> | undefined;

  ngOnInit(): void {}

  showDialog() {
    if (!this._dialogRef?.nativeElement) return;

    this._dialogRef?.nativeElement.show();
  }

  confirmDialog() {
    if (this._dialogRef?.nativeElement) {
      this._dialogRef?.nativeElement.close();
    }
    this.confirm.emit();
  }
}

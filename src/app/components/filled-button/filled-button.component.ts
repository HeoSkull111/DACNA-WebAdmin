import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
  ViewChild,
  CUSTOM_ELEMENTS_SCHEMA,
  type OnInit,
  ElementRef,
  Input,
} from '@angular/core';

import '@material/web/button/filled-button';
import '@material/web/icon/icon';
import { MdFilledButton } from '@material/web/button/filled-button';
@Component({
  selector: 'app-filled-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './filled-button.component.html',
  styleUrl: './filled-button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class FilledButtonComponent implements OnInit {
  @Input() icon: string = '';
  @Input() label: string = '';

  @Output('click') click = new EventEmitter<void>();
  @ViewChild('button') _button: ElementRef<MdFilledButton> | undefined;

  ngOnInit(): void {}

  ngAferViewInit(): void {
    this._button?.nativeElement.addEventListener('click', () => {
      this.click.emit();
    });
  }
}

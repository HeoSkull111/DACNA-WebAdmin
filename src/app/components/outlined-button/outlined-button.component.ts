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

import '@material/web/button/outlined-button';
import '@material/web/icon/icon';
import { MdOutlinedButton } from '@material/web/button/outlined-button';
@Component({
  selector: 'app-outlined-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './outlined-button.component.html',
  styleUrl: './outlined-button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class OutlinedButtonComponent implements OnInit {
  @Input() icon: string = '';
  @Input() label: string = '';

  @Output('click') click = new EventEmitter<void>();
  @ViewChild('button') _button: ElementRef<MdOutlinedButton> | undefined;

  ngOnInit(): void {}

  ngAferViewInit(): void {
    this._button?.nativeElement.addEventListener('click', () => {
      this.click.emit();
    });
  }
}

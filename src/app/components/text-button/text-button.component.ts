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

import '@material/web/button/text-button';
import '@material/web/icon/icon';
import { MdTextButton } from '@material/web/button/text-button';

@Component({
  selector: 'app-text-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './text-button.component.html',
  styleUrl: './text-button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TextButtonComponent implements OnInit {
  @Input() icon: string = '';
  @Input() label: string = '';

  @Output('click') click = new EventEmitter<void>();
  @ViewChild('button') _button: ElementRef<MdTextButton> | undefined;

  ngOnInit(): void {}

  ngAferViewInit(): void {
    this._button?.nativeElement.addEventListener('click', () => {
      this.click.emit();
    });
  }
}

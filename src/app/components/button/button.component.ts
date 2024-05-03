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
import { MdTextButton } from '@material/web/button/text-button';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ButtonComponent implements OnInit {
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

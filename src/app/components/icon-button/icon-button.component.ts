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

import '@material/web/iconbutton/icon-button';
import '@material/web/icon/icon';
import { MdIconButton } from '@material/web/iconbutton/icon-button';

@Component({
  selector: 'app-icon-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './icon-button.component.html',
  styleUrl: './icon-button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class IconButtonComponent implements OnInit {
  @Input() icon: string = '';
  @Input() label: string = '';

  @Output('click') click = new EventEmitter<void>();
  @ViewChild('button') _button: ElementRef<MdIconButton> | undefined;

  ngOnInit(): void {}

  ngAferViewInit(): void {
    this._button?.nativeElement.addEventListener('click', () => {
      this.click.emit();
    });
  }
}

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
  OnDestroy,
} from '@angular/core';

import '@material/web/button/text-button';
import '@material/web/iconbutton/icon-button';
import '@material/web/button/filled-button';
import '@material/web/iconbutton/filled-icon-button';
import '@material/web/icon/icon';

import { MdTextButton } from '@material/web/button/text-button';
import { MdIconButton } from '@material/web/iconbutton/icon-button';
import { MdFilledButton } from '@material/web/button/filled-button';
import { MdFilledIconButton } from '@material/web/iconbutton/filled-icon-button';

@Component({
  selector: 'app-sidebar-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar-button.component.html',
  styleUrl: './sidebar-button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SidebarButtonComponent implements OnInit {
  @Input() active: boolean = false;

  @Input() icon: string = '';
  @Input() label: string = '';
  @Input() isMinimized: boolean | null = null;

  @Output('click') click = new EventEmitter<void>();

  @ViewChild('text_button') _textButton: ElementRef<MdTextButton> | undefined;
  @ViewChild('icon_button') _iconButton: ElementRef<MdIconButton> | undefined;
  @ViewChild('filled_button') _filledButton:
    | ElementRef<MdFilledButton>
    | undefined;
  @ViewChild('icon_filled_button') _iconFilledButton:
    | ElementRef<MdFilledIconButton>
    | undefined;

  @ViewChild('iconRef') _icon: ElementRef<HTMLSpanElement> | undefined;
  @ViewChild('labelRef') _label: ElementRef<HTMLSpanElement> | undefined;

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    if (this._textButton) {
      this._textButton.nativeElement.addEventListener('click', () => {
        this.click.emit();
      });
    }

    if (this._iconButton) {
      this._iconButton.nativeElement.addEventListener('click', () => {
        this.click.emit();
      });
    }

    if (this._filledButton) {
      this._filledButton.nativeElement.addEventListener('click', () => {
        this.click.emit();
      });
    }

    if (this._iconFilledButton) {
      this._iconFilledButton.nativeElement.addEventListener('click', () => {
        this.click.emit();
      });
    }
  }

  ngAfterViewChecked(): void {
    if (this._label && this.isMinimized !== null) {
      this._label.nativeElement.classList.add('label-animation');
    }

    if (this._icon && this.isMinimized !== null) {
      this._icon.nativeElement.classList.add('icon-animation');
    }

    if (this._filledButton && this.isMinimized !== null) {
      this._filledButton.nativeElement.classList.add('button-animation');
    }

    if (this._textButton && this.isMinimized !== null) {
      this._textButton.nativeElement.classList.add('button-animation');
    }
  }
}

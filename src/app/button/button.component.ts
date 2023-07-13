import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button [class]="buttonClass" [disabled]="disabled" (click)="onClick.emit()">{{ label }}</button>
  `,
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

  @Input() label: string;
  @Input() buttonClass: string;
  @Input() disabled: boolean;
  @Output() onClick: EventEmitter<void> = new EventEmitter<void>();

}

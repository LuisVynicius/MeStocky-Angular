import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [NgClass],
  templateUrl: './button.html',
  styleUrl: './button.css',
})
export class Button {
  @Input()
  label: string = "";
  @Input()
  width: string = "";
  @Input()
  type: string = "button";
  @Input()
  color: 0 | 1 = 0;
  
  @Output()
  clicked = new EventEmitter<void>();

  get cssClass(): string {
    return this.color === 0 ? "blue" : "red";
  }

  onClick() {
    this.clicked.emit();
  }
}

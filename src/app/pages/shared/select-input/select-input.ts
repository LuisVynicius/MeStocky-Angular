import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-select-input',
  imports: [],
  templateUrl: './select-input.html',
  styleUrl: './select-input.css',
  encapsulation: ViewEncapsulation.None
})
export class SelectInput {
  
  @Input()
  title: string = "";
}

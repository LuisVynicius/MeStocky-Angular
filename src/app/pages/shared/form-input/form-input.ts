import { Component, Input, ViewEncapsulation } from '@angular/core';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-form-input',
  imports: [FormsModule],
  templateUrl: './form-input.html',
  styleUrl: './form-input.css',
  encapsulation: ViewEncapsulation.None
})
export class FormInput {
  @Input()
  title: string = "";
}

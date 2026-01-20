import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-informations',
  imports: [],
  templateUrl: './informations.html',
  styleUrl: './informations.css',
})
export class Informations {
  @Input()
  label: string = "";

  @Input()
  value: string = "";
}

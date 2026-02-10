import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  imports: [],
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.css',
})
export class SearchBar {
  @Input()
  filter: string = "";

  @Output() filterChange = new EventEmitter<string>();

  updateValue(value: string) {
    this.filter = value;
    this.filterChange.emit(value);
  }
}

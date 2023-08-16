import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {
  @Input() search?: string;
  @Output() searchChange = new EventEmitter<string>();
  @Output() callbackFunction: EventEmitter<any> = new EventEmitter();

  //Retorna valor digitado ao teclar [ENTER]
  submitValue(): void {
    this.searchChange.emit(this.search);
    this.callbackFunction.emit();
  }
}

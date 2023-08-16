import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-search-results-tag',
  templateUrl: './search-results-tag.component.html',
  styleUrls: ['./search-results-tag.component.scss']
})
export class SearchResultsTagComponent {
  @Input() resultsTotal: number = 0;
  @Input() showSearchTag: boolean = false;
  @Input() searchTerm: string = '';
  @Input() showCloseButton: boolean = true;
  @Output() callbackFunction: EventEmitter<any> = new EventEmitter();

  //Fecha tag de pesquisa e retorna evento de fechamento
  closeTag(): void {
    this.callbackFunction.emit();
  }
}

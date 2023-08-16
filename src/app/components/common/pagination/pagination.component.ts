import { Component, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {

  @Input() pageLimit: number = 0;
  @Input() pageOffset: number = 0;
  @Input() pageTotal: number = 0;
  @Output() callbackFunction: EventEmitter<any> = new EventEmitter();
  pageNow: number = 1;
  pagesToDisplay: Array<number> = [];

  ngOnInit(): void {
    this.pageNow = (this.pageOffset / this.pageLimit) + 1;
    this.setPagesToDisplay();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.pageNow = (this.pageOffset / this.pageLimit) + 1;
    this.setPagesToDisplay();
  }
  
  //Navega para primeira página
  firstPage(): void {
    this.pageOffset = 0;
    this.callbackFunction.emit(this.pageOffset);
  }

  //Navega para última página
  lastPage(): void {
    this.goToPage(this.getTotalPages());
  }

  //Navega para página anterior
  previousPage(): void {
    if (this.pageOffset == 0) return;
    this.pageOffset -= this.pageLimit;
    this.callbackFunction.emit(this.pageOffset);
  }
  
  //Navega para próxima página
  nextPage(): void {
    if (this.getTotalPages() == this.pageNow) return;
    this.pageOffset += this.pageLimit;
    this.callbackFunction.emit(this.pageOffset);
  }

  //Navega para página informada por parâmetro
  goToPage(page: number): void {
    this.pageOffset = (page - 1) * this.pageLimit;
    this.callbackFunction.emit(this.pageOffset);
  }

  //Calcula e retorna total de páginas 
  getTotalPages(): number {
    return Math.ceil(this.pageTotal / this.pageLimit);
  }

  //Calcula números das páginas que serão exibidos  
  setPagesToDisplay(): void {
    
    //Limpa array
    this.pagesToDisplay = [];

    //Calcula a menor e maior página para exibição
    let minPage = ((this.pageNow - 2) > 1) ? this.pageNow - 2 : 2;
    let maxPage = ((this.pageNow + 2) < this.getTotalPages()) ? this.pageNow + 2 : this.getTotalPages();
    if (this.pageNow < 4 && this.getTotalPages() >= 5) maxPage = 6; 
    if (this.pageNow > (this.getTotalPages() - 4)) {
      minPage = this.getTotalPages() - 5;
      maxPage = this.getTotalPages() - 1;
    }
    if (minPage < 1) minPage = 1;
    
    //Primeira página sempre será exibida
    if ((maxPage - minPage) >= 4) this.pagesToDisplay.push(1);
    
    //Exibe o marcador (...) quando houver intervalo entre a primeira e a página seguinte
    if (minPage > 2 ) this.pagesToDisplay.push(-1);
      
    //Monta um array com os números das páginas à serem exibidos na tela
    for (let i=minPage; i<=maxPage; i++) {
      this.pagesToDisplay.push(i);
    }

    //Exibe o marcador (...) quando houver intervalo entre a última e a página anterior
    if (maxPage < (this.getTotalPages() - 1)) this.pagesToDisplay.push(-1);
    
    //Última página sempre será exibida
    if (this.getTotalPages() >= 1) this.pagesToDisplay.push(this.getTotalPages());
  }

}

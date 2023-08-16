import { Component } from '@angular/core';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private characterService: CharacterService) { }

  ngOnInit(): void {
    this.searchAll();
  }

  title: string = 'Heróis';
  title2: string = 'Marvel';
  noDataFoundMsg: string = 'Nenhum herói encontrado';
  loadingMsg: string = 'Carregando lista de heróis...';
  isLoading: boolean = false;
  search: string = '';
  showSearchTag: string = '';
  characters: any = [];
  pageLimit: number = 0;
  pageTotal: number = 0;
  pageOffset: number = 0;
  
  //Consulta API da Marvel para resgatar os personagens cadastrados
  searchAll(pageOffset: number = 0): void {
    this.isLoading = true;
    this.characterService.allCharacters(pageOffset, this.search).subscribe((result) => {
      //Seta objeto principal dos personagens
      this.characters = result.data.results;
      //Seta informações para paginação
      this.pageLimit = result.data.limit;
      this.pageTotal = result.data.total;
      this.pageOffset = result.data.offset;
      //Controle de exibição do loading
      this.isLoading = false;
      //Controla se tag de resultados da pesquisa deve ser exibida
      if (this.search) this.showSearchTag = this.search;
      else this.showSearchTag = '';
    });
  }
  
  //Quando é realizada uma pesquisa, navega para primeira página
  searchByForm(): void {
    this.pageOffset = 0;
    this.searchAll();
  }

  //Quando é fechada a tag de pesquisa, limpa o campo de busca e faz uma nova pesquisa
  searchEmpty(): void {
    this.showSearchTag = '';
    this.search = '';
    this.searchAll();
  }

}

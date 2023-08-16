import { Component, Input } from '@angular/core';
import { CharacterService } from 'src/app/services/character.service';
import { FavoriteService } from 'src/app/services/favorite.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.scss']
})
export class CharacterCardComponent {

  constructor(private characterService: CharacterService, 
              private localStorageService: LocalStorageService,
              private favoriteService: FavoriteService) { }

  @Input() character: any = {};
  @Input() size: 'small' | 'default' | 'large' = 'default';

  get favoriteId(): string {
    return this.favoriteService.favoriteData.characterId;
  }

  get favoriteImg(): string {
    return this.favoriteService.favoriteData.characterImg;
  }

  ngOnInit(): void {
    this.setFavoriteFromStorage();
  }

  //Monta o caminho da imagem para adicionar ao "src" da imagem
  getCharacterImg(): string {
    if (this.character.thumbnail) {
      return this.character.thumbnail.path + '.' + this.character.thumbnail.extension;
    }
    else {
      return '/assets/img/marvel_placeholder.jpg';
    }
  }
  
  //Adiciona favorito
  favorite(character: any): void {
    //Remove favorito caso já esteja favoritado
    if (character.id == this.favoriteId) {
      this.removeFavorite();
    }
    //Adiciona favorito
    else {
      //Grava informações do favorito no local storage
      this.localStorageService.saveData('favoriteId', character.id);
      this.localStorageService.saveData('favoriteImg', character.thumbnail.path + '.' + character.thumbnail.extension);
      
      //Persiste informações do favorito para utilização nos componentes
      this.favoriteService.favoriteData = {
        characterId: character.id,
        characterImg: character.thumbnail.path + '.' + character.thumbnail.extension
      }

      //Exibe mensagem de sucesso
      this.characterService.showMessage('Herói adicionado como favorito!');
    }
  }

  //Remove favorito
  removeFavorite(): void {
    //Remove informações do favorito no local storage
    this.localStorageService.removeData('favoriteId');
    this.localStorageService.removeData('favoriteImg');
    
    //Persiste informações default do favorito para utilização nos componentes
    this.favoriteService.favoriteData = {
      characterId: '0',
      characterImg: './assets/img/avatar_placeholder.png'
    }

    //Exibe mensagem de sucesso
    this.characterService.showMessage('Herói removido como favorito!');
  }

  //Persiste informações do favorito à partir do local storage
  setFavoriteFromStorage(): void {
    if (this.localStorageService.getData('favoriteImg')) {
      this.favoriteService.favoriteData = {
        characterId: this.localStorageService.getData('favoriteId')!,
        characterImg: this.localStorageService.getData('favoriteImg')!
      }
    }
  }

}

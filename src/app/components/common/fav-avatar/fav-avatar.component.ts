import { Component } from '@angular/core';
import { FavoriteService } from './../../../services/favorite.service';

@Component({
  selector: 'app-fav-avatar',
  templateUrl: './fav-avatar.component.html',
  styleUrls: ['./fav-avatar.component.scss']
})
export class FavAvatarComponent {

  constructor(private favoriteService: FavoriteService) { }

  get characterId(): string {
    return this.favoriteService.favoriteData.characterId;
  }

  get characterImg(): string {
    return this.favoriteService.favoriteData.characterImg;
  }

  ngOnInit(): void {
    //Seta a imagem de placeholder do avatar caso não possua favorito
    if (!this.characterImg) {
      this.favoriteService.favoriteData = {
        characterId: '0',
        characterImg: './assets/img/avatar_placeholder.png'
      }
    }
  }

}

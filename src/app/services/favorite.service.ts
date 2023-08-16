import { Injectable } from '@angular/core';
import { FavoriteData } from './../models/favorite-data.model';
import { BehaviorSubject } from 'rxjs';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {

  private _favoriteData = new BehaviorSubject<FavoriteData>({
    characterId: '0',
    characterImg: this.localStorageService.getData('favoriteImg')!
  })
  
  constructor(private localStorageService: LocalStorageService) { }

  get favoriteData(): FavoriteData {
    return this._favoriteData.value;
  }

  set favoriteData(favoriteData: FavoriteData) {
    this._favoriteData.next(favoriteData);
  }

}

import { TestBed } from '@angular/core/testing';
import { FavoriteService } from './favorite.service';

describe('FavoriteService', () => {
  let service: FavoriteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavoriteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add a value and keep it', () => {
    service.favoriteData = {
      characterId: '101010',
      characterImg: 'http://i.annihil.us/u/prod/marvel/i/mg/9/30/535feab462a64.jpg'
    }
    const storedValueId = service.favoriteData.characterId;
    const storedValueImg = service.favoriteData.characterImg;
    expect(storedValueId).toBe('101010');
    expect(storedValueImg).toBe('http://i.annihil.us/u/prod/marvel/i/mg/9/30/535feab462a64.jpg');
  });
});

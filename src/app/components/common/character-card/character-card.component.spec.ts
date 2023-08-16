import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { CharacterCardComponent } from './character-card.component';
// import { CharacterService } from '../../../services/character.service';
// import { HttpClientModule } from '@angular/common/http';
// import { MatSnackBarModule } from  '@angular/material/snack-bar';

import { CharacterCardComponent } from './character-card.component';
import { CharacterService } from 'src/app/services/character.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from  '@angular/material/snack-bar';
import { MatCardModule } from  '@angular/material/card';
import { SubstringPipe } from 'src/app/pipes/substring.pipe';

describe('CharacterCardComponent', () => {
  let component: CharacterCardComponent;
  let fixture: ComponentFixture<CharacterCardComponent>;

  beforeEach(() => {
    
    TestBed.configureTestingModule({
      declarations: [CharacterCardComponent, SubstringPipe],
      imports: [HttpClientModule, MatSnackBarModule, MatCardModule],
      providers: [CharacterService, LocalStorageService]
    });
    fixture = TestBed.createComponent(CharacterCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    component.character = {
      "id": 1009149,
      "name": "Captain America",
      "description": "Vowing to serve his country any way he could, young Steve Rogers took the super soldier serum to become America's one-man army",
      "modified": "2014-04-29T14:10:43-0400",
      "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/3/50/537ba56d31087",
          "extension": "jpg"
      }
    };
    
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});

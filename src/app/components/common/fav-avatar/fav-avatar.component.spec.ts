import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FavAvatarComponent } from './fav-avatar.component';

describe('FavAvatarComponent', () => {
  let component: FavAvatarComponent;
  let fixture: ComponentFixture<FavAvatarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FavAvatarComponent]
    });
    fixture = TestBed.createComponent(FavAvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have no favorite when starting', () => {
    expect(component.characterId).toBe('0');
  });
});

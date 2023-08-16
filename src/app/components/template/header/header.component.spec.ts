import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatToolbarModule } from  '@angular/material/toolbar';
import { HeaderComponent } from './header.component';
import { FavAvatarComponent } from '../../common/fav-avatar/fav-avatar.component' ;

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent, FavAvatarComponent],
      imports: [MatToolbarModule]
    });
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

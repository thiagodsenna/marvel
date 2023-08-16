import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/template/header/header.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { HomeComponent } from './components/views/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from  '@angular/material/snack-bar';
import { MatToolbarModule } from  '@angular/material/toolbar';
import { FormsModule } from '@angular/forms';
import { SearchResultsTagComponent } from './components/common/search-results-tag/search-results-tag.component';
import { SearchBarComponent } from './components/common/search-bar/search-bar.component';
import { PaginationComponent } from './components/common/pagination/pagination.component';
import { FavAvatarComponent } from './components/common/fav-avatar/fav-avatar.component';

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule, HttpClientModule, MatSnackBarModule, MatToolbarModule, FormsModule],
    declarations: [AppComponent, HeaderComponent, HomeComponent, FooterComponent, SearchResultsTagComponent, PaginationComponent, FavAvatarComponent, SearchBarComponent]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'marvel'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('marvel');
  });
});

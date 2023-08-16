import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from  '@angular/material/snack-bar';
import { SearchResultsTagComponent } from '../../common/search-results-tag/search-results-tag.component';
import { SearchBarComponent } from '../../common/search-bar/search-bar.component';
import { PaginationComponent } from '../../common/pagination/pagination.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';
import { AppRoutingModule } from 'src/app/app-routing.module';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent, SearchResultsTagComponent, PaginationComponent, SearchBarComponent],
      imports: [HttpClientModule, MatSnackBarModule, FormsModule, AppRoutingModule]
    });
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

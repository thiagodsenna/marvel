import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from  '@angular/material/snack-bar';
import { SearchResultsTagComponent } from '../../common/search-results-tag/search-results-tag.component';
import { SearchBarComponent } from '../../common/search-bar/search-bar.component';
import { PaginationComponent } from '../../common/pagination/pagination.component';
import { FormsModule } from '@angular/forms';
import { ResultsComponent } from './results.component';
import { RouterTestingModule } from "@angular/router/testing";

describe('ResultsComponent', () => {
  let component: ResultsComponent;
  let fixture: ComponentFixture<ResultsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResultsComponent, SearchResultsTagComponent, PaginationComponent, SearchBarComponent],
      imports: [HttpClientModule, MatSnackBarModule, FormsModule, RouterTestingModule],
      providers: []
    });
    fixture = TestBed.createComponent(ResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

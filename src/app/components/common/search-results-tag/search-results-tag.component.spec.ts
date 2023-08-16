import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchResultsTagComponent } from './search-results-tag.component';

describe('SearchResultsTagComponent', () => {
  let component: SearchResultsTagComponent;
  let fixture: ComponentFixture<SearchResultsTagComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchResultsTagComponent]
    });
    fixture = TestBed.createComponent(SearchResultsTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not show the tag on screen at startup', () => {
    expect(component.showSearchTag).toBeFalse();
  });
});

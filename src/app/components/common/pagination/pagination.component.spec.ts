import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationComponent } from './pagination.component';

describe('PaginationComponent', () => {
  let component: PaginationComponent;
  let fixture: ComponentFixture<PaginationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaginationComponent]
    });
    fixture = TestBed.createComponent(PaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should start on first page', () => {
    component.pageLimit = 10;
    component.pageOffset = 0;
    component.pageTotal = 100;
    component.setPagesToDisplay();
    expect(component.pageOffset).toBe(0);
  });

  it('should jump to page 2 on next page button function', () => {
    component.pageLimit = 10;
    component.pageOffset = 0;
    component.pageTotal = 100;
    component.setPagesToDisplay();
    component.nextPage();
    expect(component.pageOffset).toBe(10);
  });

  it('should jump to page 10 on last page button function', () => {
    component.pageLimit = 10;
    component.pageOffset = 0;
    component.pageTotal = 100;
    component.setPagesToDisplay();
    component.lastPage();
    expect(component.pageOffset).toBe(90);
  });
});

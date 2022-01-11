import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookAuthorListDisplayerComponent } from './book-author-list-displayer.component';

describe('BookAuthorListDisplayerComponent', () => {
  let component: BookAuthorListDisplayerComponent;
  let fixture: ComponentFixture<BookAuthorListDisplayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookAuthorListDisplayerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookAuthorListDisplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

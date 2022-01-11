import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookcaseEditComponent } from './bookcase-edit.component';

describe('BookcaseEditComponent', () => {
  let component: BookcaseEditComponent;
  let fixture: ComponentFixture<BookcaseEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookcaseEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookcaseEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

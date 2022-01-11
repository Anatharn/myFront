import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookcaseRackEditorComponent } from './bookcase-rack-editor.component';

describe('BookcaseRackEditorComponent', () => {
  let component: BookcaseRackEditorComponent;
  let fixture: ComponentFixture<BookcaseRackEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookcaseRackEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookcaseRackEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextAreaParentComponent } from './text-area-parent.component';

describe('TextAreaParentComponent', () => {
  let component: TextAreaParentComponent;
  let fixture: ComponentFixture<TextAreaParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextAreaParentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextAreaParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

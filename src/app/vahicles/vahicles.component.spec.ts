import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VahiclesComponent } from './vahicles.component';

describe('VahiclesComponent', () => {
  let component: VahiclesComponent;
  let fixture: ComponentFixture<VahiclesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VahiclesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VahiclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

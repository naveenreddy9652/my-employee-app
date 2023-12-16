import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbouCeoComponent } from './abou-ceo.component';

describe('AbouCeoComponent', () => {
  let component: AbouCeoComponent;
  let fixture: ComponentFixture<AbouCeoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbouCeoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbouCeoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

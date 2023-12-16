import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetBankingPaymentComponent } from './net-banking-payment.component';

describe('NetBankingPaymentComponent', () => {
  let component: NetBankingPaymentComponent;
  let fixture: ComponentFixture<NetBankingPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NetBankingPaymentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NetBankingPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentContainerComponent } from './investment-container.component';

describe('ExploreContainerComponent', () => {
  let component: InvestmentContainerComponent;
  let fixture: ComponentFixture<InvestmentContainerComponent>;

  beforeEach(async () => {
    fixture = TestBed.createComponent(InvestmentContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

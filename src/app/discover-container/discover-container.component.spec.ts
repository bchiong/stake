import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscoverContainerComponent } from './discover-container.component';

describe('ExploreContainerComponent', () => {
  let component: DiscoverContainerComponent;
  let fixture: ComponentFixture<DiscoverContainerComponent>;

  beforeEach(async () => {
    fixture = TestBed.createComponent(DiscoverContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

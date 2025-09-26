import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StockCardComponent } from './stock-card.component';

describe('StockCardComponent', () => {
  let component: StockCardComponent;
  let fixture: ComponentFixture<StockCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StockCardComponent],
      imports: [IonicModule.forRoot()]
    });
    fixture = TestBed.createComponent(StockCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

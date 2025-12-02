import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CarouselDemoComponent } from './carousel-demo.component';

describe('CarouselComponent', () => {
  let component: CarouselDemoComponent;
  let fixture: ComponentFixture<CarouselDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarouselDemoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CarouselDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

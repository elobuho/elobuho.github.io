import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SkeletonDemoComponent } from './skeleton-demo.component';

describe('SkeletonDemoComponent', () => {
  let component: SkeletonDemoComponent;
  let fixture: ComponentFixture<SkeletonDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkeletonDemoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SkeletonDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

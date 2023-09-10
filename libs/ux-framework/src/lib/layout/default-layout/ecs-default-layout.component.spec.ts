import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EcsDefaultLayoutComponent } from './ecs-default-layout.component';

describe('EcsDefaultLayoutComponent', () => {
  let component: EcsDefaultLayoutComponent;
  let fixture: ComponentFixture<EcsDefaultLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EcsDefaultLayoutComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EcsDefaultLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

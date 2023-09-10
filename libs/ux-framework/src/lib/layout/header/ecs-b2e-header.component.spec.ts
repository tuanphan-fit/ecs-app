import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EcsB2eHeaderComponent } from './ecs-b2e-header.component';

describe('EcsB2eHeaderComponent', () => {
  let component: EcsB2eHeaderComponent;
  let fixture: ComponentFixture<EcsB2eHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EcsB2eHeaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EcsB2eHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

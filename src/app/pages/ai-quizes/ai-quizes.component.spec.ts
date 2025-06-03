import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiQuizesComponent } from './ai-quizes.component';

describe('AiQuizesComponent', () => {
  let component: AiQuizesComponent;
  let fixture: ComponentFixture<AiQuizesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AiQuizesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AiQuizesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

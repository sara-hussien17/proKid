import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Quiz1AiComponent } from './quiz1-ai.component';

describe('Quiz1AiComponent', () => {
  let component: Quiz1AiComponent;
  let fixture: ComponentFixture<Quiz1AiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Quiz1AiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Quiz1AiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

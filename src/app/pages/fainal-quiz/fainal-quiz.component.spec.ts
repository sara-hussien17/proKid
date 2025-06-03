import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FainalQuizComponent } from './fainal-quiz.component';

describe('FainalQuizComponent', () => {
  let component: FainalQuizComponent;
  let fixture: ComponentFixture<FainalQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FainalQuizComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FainalQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

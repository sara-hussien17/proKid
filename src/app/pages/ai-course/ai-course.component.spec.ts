import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiCourseComponent } from './ai-course.component';

describe('AiCourseComponent', () => {
  let component: AiCourseComponent;
  let fixture: ComponentFixture<AiCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AiCourseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AiCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

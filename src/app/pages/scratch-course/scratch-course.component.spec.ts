import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScratchCourseComponent } from './scratch-course.component';

describe('ScratchCourseComponent', () => {
  let component: ScratchCourseComponent;
  let fixture: ComponentFixture<ScratchCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScratchCourseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScratchCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

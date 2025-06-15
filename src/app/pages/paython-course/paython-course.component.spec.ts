import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaythonCourseComponent } from './paython-course.component';

describe('PaythonCourseComponent', () => {
  let component: PaythonCourseComponent;
  let fixture: ComponentFixture<PaythonCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaythonCourseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaythonCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

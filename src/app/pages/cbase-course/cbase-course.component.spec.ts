import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CBaseCourseComponent } from './cbase-course.component';

describe('CBaseCourseComponent', () => {
  let component: CBaseCourseComponent;
  let fixture: ComponentFixture<CBaseCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CBaseCourseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CBaseCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

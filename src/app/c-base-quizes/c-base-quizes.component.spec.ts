import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CBaseQuizesComponent } from './c-base-quizes.component';

describe('CBaseQuizesComponent', () => {
  let component: CBaseQuizesComponent;
  let fixture: ComponentFixture<CBaseQuizesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CBaseQuizesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CBaseQuizesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

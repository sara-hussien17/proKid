import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScratchQuizesComponent } from './scratch-quizes.component';

describe('ScratchQuizesComponent', () => {
  let component: ScratchQuizesComponent;
  let fixture: ComponentFixture<ScratchQuizesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScratchQuizesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScratchQuizesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

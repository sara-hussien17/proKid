import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaythonQuizesComponent } from './paython-quizes.component';

describe('PaythonQuizesComponent', () => {
  let component: PaythonQuizesComponent;
  let fixture: ComponentFixture<PaythonQuizesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaythonQuizesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaythonQuizesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeBaseReadComponent } from './code-base-read.component';

describe('CodeBaseReadComponent', () => {
  let component: CodeBaseReadComponent;
  let fixture: ComponentFixture<CodeBaseReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CodeBaseReadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CodeBaseReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

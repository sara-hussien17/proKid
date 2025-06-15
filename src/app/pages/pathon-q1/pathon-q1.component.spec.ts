import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PathonQ1Component } from './pathon-q1.component';

describe('PathonQ1Component', () => {
  let component: PathonQ1Component;
  let fixture: ComponentFixture<PathonQ1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PathonQ1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PathonQ1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

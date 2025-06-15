import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScratchQ1Component } from './scratch-q1.component';

describe('ScratchQ1Component', () => {
  let component: ScratchQ1Component;
  let fixture: ComponentFixture<ScratchQ1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScratchQ1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScratchQ1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

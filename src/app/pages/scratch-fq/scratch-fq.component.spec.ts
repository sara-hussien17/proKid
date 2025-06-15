import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScratchFQComponent } from './scratch-fq.component';

describe('ScratchFQComponent', () => {
  let component: ScratchFQComponent;
  let fixture: ComponentFixture<ScratchFQComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScratchFQComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScratchFQComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

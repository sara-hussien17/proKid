import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PathonFQComponent } from './pathon-fq.component';

describe('PathonFQComponent', () => {
  let component: PathonFQComponent;
  let fixture: ComponentFixture<PathonFQComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PathonFQComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PathonFQComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactTurduckenComponent } from './react-turducken.component';

describe('ReactTurduckenComponent', () => {
  let component: ReactTurduckenComponent;
  let fixture: ComponentFixture<ReactTurduckenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactTurduckenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactTurduckenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallescubosComponent } from './detallescubos.component';

describe('DetallescubosComponent', () => {
  let component: DetallescubosComponent;
  let fixture: ComponentFixture<DetallescubosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetallescubosComponent]
    });
    fixture = TestBed.createComponent(DetallescubosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

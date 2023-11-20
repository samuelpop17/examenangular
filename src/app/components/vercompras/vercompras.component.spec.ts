import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VercomprasComponent } from './vercompras.component';

describe('VercomprasComponent', () => {
  let component: VercomprasComponent;
  let fixture: ComponentFixture<VercomprasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VercomprasComponent]
    });
    fixture = TestBed.createComponent(VercomprasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

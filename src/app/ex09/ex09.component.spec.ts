import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex09Component } from './ex09.component';

describe('Ex09Component', () => {
  let component: Ex09Component;
  let fixture: ComponentFixture<Ex09Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ex09Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ex09Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

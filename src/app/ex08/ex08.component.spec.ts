import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex08Component } from './ex08.component';

describe('Ex08Component', () => {
  let component: Ex08Component;
  let fixture: ComponentFixture<Ex08Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ex08Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ex08Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

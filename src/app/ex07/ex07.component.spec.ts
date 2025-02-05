import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex07Component } from './ex07.component';

describe('Ex07Component', () => {
  let component: Ex07Component;
  let fixture: ComponentFixture<Ex07Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ex07Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ex07Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

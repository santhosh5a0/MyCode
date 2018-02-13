import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Routes2Component } from './routes2.component';

describe('Routes2Component', () => {
  let component: Routes2Component;
  let fixture: ComponentFixture<Routes2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Routes2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Routes2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

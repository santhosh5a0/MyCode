import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpServiceUserComponent } from './http-service-user.component';

describe('HttpServiceUserComponent', () => {
  let component: HttpServiceUserComponent;
  let fixture: ComponentFixture<HttpServiceUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpServiceUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpServiceUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

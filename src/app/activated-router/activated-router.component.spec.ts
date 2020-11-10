import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivatedRouterComponent } from './activated-router.component';

describe('ActivatedRouterComponent', () => {
  let component: ActivatedRouterComponent;
  let fixture: ComponentFixture<ActivatedRouterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivatedRouterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivatedRouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

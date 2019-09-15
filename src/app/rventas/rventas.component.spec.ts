import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {RVentasComponent} from './rventas.component';

describe('RVentasComponent', () => {
  let component: RVentasComponent;
  let fixture: ComponentFixture<RVentasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RVentasComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RVentasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {GTiposInmuebleComponent} from './gtipos-inmueble.component';

describe('GTiposInmuebleComponent', () => {
  let component: GTiposInmuebleComponent;
  let fixture: ComponentFixture<GTiposInmuebleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GTiposInmuebleComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GTiposInmuebleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

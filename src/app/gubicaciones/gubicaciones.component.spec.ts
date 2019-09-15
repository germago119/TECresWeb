import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {GUbicacionesComponent} from './gubicaciones.component';

describe('GUbicacionesComponent', () => {
  let component: GUbicacionesComponent;
  let fixture: ComponentFixture<GUbicacionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GUbicacionesComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GUbicacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

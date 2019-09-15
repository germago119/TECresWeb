import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {GEstadisticasComponent} from './gestadisticas.component';

describe('GEstadisticasComponent', () => {
  let component: GEstadisticasComponent;
  let fixture: ComponentFixture<GEstadisticasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GEstadisticasComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GEstadisticasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

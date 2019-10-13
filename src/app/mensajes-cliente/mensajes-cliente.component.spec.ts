import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MensajesClienteComponent } from './mensajes-cliente.component';

describe('MensajesClienteComponent', () => {
  let component: MensajesClienteComponent;
  let fixture: ComponentFixture<MensajesClienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MensajesClienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MensajesClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

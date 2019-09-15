import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {GPerfilClientesComponent} from './gperfil-clientes.component';

describe('GPerfilClientesComponent', () => {
  let component: GPerfilClientesComponent;
  let fixture: ComponentFixture<GPerfilClientesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GPerfilClientesComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GPerfilClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

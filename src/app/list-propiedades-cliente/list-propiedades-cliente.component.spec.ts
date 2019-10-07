import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPropiedadesClienteComponent } from './list-propiedades-cliente.component';

describe('ListPropiedadesClienteComponent', () => {
  let component: ListPropiedadesClienteComponent;
  let fixture: ComponentFixture<ListPropiedadesClienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPropiedadesClienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPropiedadesClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

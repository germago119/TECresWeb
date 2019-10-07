import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAnunciosClienteComponent } from './list-anuncios-cliente.component';

describe('ListAnunciosClienteComponent', () => {
  let component: ListAnunciosClienteComponent;
  let fixture: ComponentFixture<ListAnunciosClienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListAnunciosClienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAnunciosClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

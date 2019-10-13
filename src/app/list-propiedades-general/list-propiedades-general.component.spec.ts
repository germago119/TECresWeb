import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPropiedadesGeneralComponent } from './list-propiedades-general.component';

describe('ListPropiedadesGeneralComponent', () => {
  let component: ListPropiedadesGeneralComponent;
  let fixture: ComponentFixture<ListPropiedadesGeneralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPropiedadesGeneralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPropiedadesGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {GVendedoresComponent} from './gvendedores.component';

describe('GVendedoresComponent', () => {
  let component: GVendedoresComponent;
  let fixture: ComponentFixture<GVendedoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GVendedoresComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GVendedoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

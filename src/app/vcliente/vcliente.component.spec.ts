import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VclienteComponent } from './vcliente.component';

describe('VclienteComponent', () => {
  let component: VclienteComponent;
  let fixture: ComponentFixture<VclienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VclienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VclienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

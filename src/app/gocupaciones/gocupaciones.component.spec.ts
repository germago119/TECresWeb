import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {GOcupacionesComponent} from './gocupaciones.component';

describe('GOcupacionesComponent', () => {
  let component: GOcupacionesComponent;
  let fixture: ComponentFixture<GOcupacionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GOcupacionesComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GOcupacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

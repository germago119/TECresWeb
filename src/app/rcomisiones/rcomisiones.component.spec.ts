import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {RComisionesComponent} from './rcomisiones.component';

describe('RComisionesComponent', () => {
  let component: RComisionesComponent;
  let fixture: ComponentFixture<RComisionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RComisionesComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RComisionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

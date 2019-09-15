import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {RAnunciosComponent} from './ranuncios.component';

describe('RAnunciosComponent', () => {
  let component: RAnunciosComponent;
  let fixture: ComponentFixture<RAnunciosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RAnunciosComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RAnunciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AAnunciosComponent} from './aanuncios.component';

describe('AAnunciosComponent', () => {
  let component: AAnunciosComponent;
  let fixture: ComponentFixture<AAnunciosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AAnunciosComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AAnunciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

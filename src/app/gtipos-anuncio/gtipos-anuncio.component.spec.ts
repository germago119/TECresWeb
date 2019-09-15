import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {GTiposAnuncioComponent} from './gtipos-anuncio.component';

describe('GTiposAnuncioComponent', () => {
  let component: GTiposAnuncioComponent;
  let fixture: ComponentFixture<GTiposAnuncioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GTiposAnuncioComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GTiposAnuncioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AVendedorComponent} from './avendedor.component';

describe('AVendedorComponent', () => {
  let component: AVendedorComponent;
  let fixture: ComponentFixture<AVendedorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AVendedorComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AVendedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCompradoresComponent } from './form-compradores.component';

describe('FormCompradoresComponent', () => {
  let component: FormCompradoresComponent;
  let fixture: ComponentFixture<FormCompradoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormCompradoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCompradoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

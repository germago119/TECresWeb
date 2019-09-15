import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {GAdminComponent} from './gadmin.component';

describe('GAdminComponent', () => {
  let component: GAdminComponent;
  let fixture: ComponentFixture<GAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GAdminComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

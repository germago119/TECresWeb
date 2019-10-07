import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicoMetaComponent } from './publico-meta.component';

describe('PublicoMetaComponent', () => {
  let component: PublicoMetaComponent;
  let fixture: ComponentFixture<PublicoMetaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicoMetaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicoMetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComedorComponent } from './comedor.component';

describe('ComedorComponent', () => {
  let component: ComedorComponent;
  let fixture: ComponentFixture<ComedorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComedorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

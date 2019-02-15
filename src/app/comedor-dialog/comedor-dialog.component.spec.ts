import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComedorDialogComponent } from './comedor-dialog.component';

describe('ComedorDialogComponent', () => {
  let component: ComedorDialogComponent;
  let fixture: ComponentFixture<ComedorDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComedorDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComedorDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

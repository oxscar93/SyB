import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuComedorAddComponent } from './menu-comedor-add.component';

describe('MenuComedorAddComponent', () => {
  let component: MenuComedorAddComponent;
  let fixture: ComponentFixture<MenuComedorAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuComedorAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuComedorAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

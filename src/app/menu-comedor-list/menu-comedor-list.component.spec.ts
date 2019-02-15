import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuComedorListComponent } from './menu-comedor-list.component';

describe('MenuComedorListComponent', () => {
  let component: MenuComedorListComponent;
  let fixture: ComponentFixture<MenuComedorListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuComedorListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuComedorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

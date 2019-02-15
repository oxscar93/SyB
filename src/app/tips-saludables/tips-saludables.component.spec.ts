import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipsSaludablesComponent } from './tips-saludables.component';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

describe('TipsComponent', () => {
  let component: TipsSaludablesComponent;
  let fixture: ComponentFixture<TipsSaludablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipsSaludablesComponent ]
      ,imports: [HttpModule, BrowserModule, CommonModule, FormsModule,ReactiveFormsModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipsSaludablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

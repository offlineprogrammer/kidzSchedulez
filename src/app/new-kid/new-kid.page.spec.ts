import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewKidPage } from './new-kid.page';

describe('NewKidPage', () => {
  let component: NewKidPage;
  let fixture: ComponentFixture<NewKidPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewKidPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewKidPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

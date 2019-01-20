import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanzPage } from './planz.page';

describe('PlanzPage', () => {
  let component: PlanzPage;
  let fixture: ComponentFixture<PlanzPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanzPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanzPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

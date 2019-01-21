import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskzPage } from './taskz.page';

describe('TaskzPage', () => {
  let component: TaskzPage;
  let fixture: ComponentFixture<TaskzPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskzPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskzPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabaseActionsComponent } from './database-actions.component';

describe('DatabaseActionsComponent', () => {
  let component: DatabaseActionsComponent;
  let fixture: ComponentFixture<DatabaseActionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatabaseActionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatabaseActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

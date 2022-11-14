import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmScheduleDialogComponent } from './confirm-schedule-dialog.component';

describe('ConfirmScheduleDialogComponent', () => {
  let component: ConfirmScheduleDialogComponent;
  let fixture: ComponentFixture<ConfirmScheduleDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmScheduleDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmScheduleDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-confirm-schedule-dialog',
  templateUrl: './confirm-schedule-dialog.component.html',
  styleUrls: ['./confirm-schedule-dialog.component.scss']
})
export class ConfirmScheduleDialogComponent implements OnInit {

  public get dateControl(): AbstractControl{
    return this.formGroup.get('date') as AbstractControl;
  }

  public date: Date;
  public time: string;
  public formGroup: FormGroup;

  constructor(
    fb: FormBuilder,
  ) {
    this.formGroup = fb.group({
      date: [null, [Validators.required]],
    });
   }

  ngOnInit(): void {
  }

}

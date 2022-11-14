import { Component, OnInit } from '@angular/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';
import {MatDialog} from '@angular/material/dialog';
import { ConfirmScheduleDialogComponent } from '../confirm-schedule-dialog/confirm-schedule-dialog.component';

export interface Tag {
  name: string;
}
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent {
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  tags: Tag[] = [{name: 'Cake'}, {name: 'Cookie'}, {name: 'Easy'}];

  constructor(
    public dialog: MatDialog,

  ) {}
  
  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our tag
    if (value) {
      this.tags.push({name: value});
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  remove(tag: Tag): void {
    const index = this.tags.indexOf(tag);

    if (index >= 0) {
      this.tags.splice(index, 1);
    }
  }

  openDialog() {
    this.dialog.open(ConfirmScheduleDialogComponent);
  }
}


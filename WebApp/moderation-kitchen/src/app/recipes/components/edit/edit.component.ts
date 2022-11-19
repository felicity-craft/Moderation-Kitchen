import { Component, OnInit } from '@angular/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';
import {MatDialog} from '@angular/material/dialog';
import { ConfirmScheduleDialogComponent } from '../../../admin/components/confirm-schedule-dialog/confirm-schedule-dialog.component';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

interface RecipeEditForm{
  slug: FormControl<string>;
  title: FormControl<string>;
  author: FormControl<string>;
  date: FormControl<string>;
  intro: FormControl<string>;
  heroImage: FormControl<string>;
  body: FormControl<string>;
  printImage: FormControl<string>;
  prepTime: FormControl<string>;
  cookTime: FormControl<string>;
  quantitySizeMade: FormControl<string>;
  ingredients: FormArray<FormControl<string|null>>;
  method: FormArray<FormControl<string|null>>;
  tags: FormArray<FormControl<string|null>>;
}

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
  public formGroup: FormGroup;
  public get tagsControl(): FormArray{
    return this.formGroup.get('tags') as FormArray;
  }

  constructor(
    public dialog: MatDialog,
    private fb: FormBuilder,

  ) {
      this.formGroup = fb.group({
        slug: fb.control(''),     
        title: fb.control(''),     
        author: fb.control(''),     
        date: fb.control(''),     
        intro: fb.control(''),     
        heroImage: fb.control(''),     
        body: fb.control(''),     
        printImage: fb.control(''),     
        prepTime: fb.control(''),     
        cookTime: fb.control(''),     
        quantitySizeMade: fb.control(''),     
        ingredients: fb.array([]),
        method: fb.array([]),
        tags: fb.array([]),
    })
  }
  
  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    // Add our tag
    if (value) {
      this.tagsControl.push(this.fb.control(value));
    }
    // Clear the input value
    event.chipInput!.clear();
  }
  remove(tag: string): void {
    var controlIndex = this.tagsControl.value.findIndex(value => value === tag)
    this.tagsControl.removeAt(controlIndex)
  }

  openDialog() {
    this.dialog.open(ConfirmScheduleDialogComponent);
  }
}


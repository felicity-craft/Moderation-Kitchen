import { Component, OnInit } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmScheduleDialogComponent } from '../../../admin/components/confirm-schedule-dialog/confirm-schedule-dialog.component';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

interface RecipeEditForm {
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
  ingredients: FormArray<FormControl<string | null>>;
  method: FormArray<FormControl<string | null>>;
  tags: FormArray<FormControl<string | null>>;
}

export interface Tag {
  name: string;
}

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent {
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  // This is the main form which represents the recipe we are editing, and the helper properties.
  public formGroup: FormGroup;
  public get tagsControl(): FormArray {
    return this.formGroup.get('tags') as FormArray;
  }
  public get ingredientsArray(): FormArray {
    return this.formGroup.get('ingredients') as FormArray;
  }
  public get ingredientControls(): FormControl[] {
    return this.ingredientsArray.controls as FormControl[];
  }
  public get methodArray(): FormArray {
    return this.formGroup.get('method') as FormArray;
  }
  public get methodControls(): FormControl[] {
    return this.methodArray.controls as FormControl[];
  }
  // this is the ingredient form which represents new ingredients to be added to the recipe.
  public ingredientFormGroup: FormGroup;
  // this is the method form which represents new method steps to be added to the recipe.
  public methodFormGroup: FormGroup;

  constructor(public dialog: MatDialog, private fb: FormBuilder) {
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
    });
    // this is initializing the ingredient form group, adding a control with an empty value to the form
    this.ingredientFormGroup = fb.group({
      ingredient: fb.control(''),
    });
    // this is initializing the method form group, adding a control with an empty value to the form
    this.methodFormGroup = fb.group({
      step: fb.control(''),
    });
  }

  // ingredients methods
  addIngredient(): void {
    const ingredientValue = this.ingredientFormGroup.get('ingredient').value;
    this.ingredientsArray.push(
      this.fb.control(ingredientValue)
    );
    this.ingredientFormGroup.reset();
  }
  removeIngredient(controlIndex: number): void {
    this.ingredientsArray.removeAt(controlIndex);
  }

  // method step methods
  addMethodStep(): void {
    const methodStepValue = this.methodFormGroup.get('step').value;
    this.methodArray.push(
      this.fb.control(methodStepValue)
    );
    this.methodFormGroup.reset();
  }
  removeMethodStep(controlIndex: number): void {
    this.methodArray.removeAt(controlIndex);
  }

  
  // tag methods
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
    var controlIndex = this.tagsControl.value.findIndex(
      (value) => value === tag
    );
    this.tagsControl.removeAt(controlIndex);
  }

  // scheduled method
  openDialog() {
    this.dialog.open(ConfirmScheduleDialogComponent);
  }
}

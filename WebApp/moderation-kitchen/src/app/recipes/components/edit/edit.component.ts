import { Component, OnInit } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmScheduleDialogComponent } from '../../../admin/components/confirm-schedule-dialog/confirm-schedule-dialog.component';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from 'src/app/core/services/recipe.service';

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
  public get titleControl(): FormControl {
    return this.formGroup.get('title') as FormControl;
  }
  public get slugControl(): FormControl {
    return this.formGroup.get('slug') as FormControl;
  }
  public get heroImageControl(): FormControl {
    return this.formGroup.get('heroImage') as FormControl;
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
  public get tagsArray(): FormArray {
    return this.formGroup.get('tags') as FormArray;
  }
  public get dateControl(): FormControl {
    return this.formGroup.get('date') as FormControl;
  }
  public get isDraftControl(): FormControl {
    return this.formGroup.get('isDraft') as FormControl;
  }
  // this is the ingredient form which represents new ingredients to be added to the recipe.
  public ingredientFormGroup: FormGroup;
  // this is the method form which represents new method steps to be added to the recipe.
  public methodFormGroup: FormGroup;
  // this is the tag form which represents new tags to be added to the recipe.
  public tagFormGroup: FormGroup;
  // Image preview
  public preview: string = '/assets/images/default.png';
  private reader: FileReader = new FileReader();
  private slug: string;

  constructor(
    public dialog: MatDialog,
    private fb: FormBuilder,
    private recipeService: RecipeService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {
    this.formGroup = fb.group({
      slug: fb.control(''),
      isDraft: fb.control(false),
      title: fb.control(''),
      author: fb.control('Felicity'),
      date: fb.control(new Date()),
      intro: fb.control(''),
      heroImage: fb.control(''),
      body: fb.control(''),
      prepTime: fb.control(''),
      cookTime: fb.control(''),
      quantitySizeMade: fb.control(''),
      ingredients: fb.array([]),
      method: fb.array([]),
      tags: fb.array([]),
    });
    // whenever the title changes, update the slug by converting the tile to lower kebab case.
    this.titleControl.valueChanges.subscribe((value: string) => {
      const valueAsKebabCase = value.toLowerCase().replace(/ /g, '-');
      this.slugControl.setValue(valueAsKebabCase);
    });
    // this is initializing the ingredient form group, adding a control with an empty value to the form
    this.ingredientFormGroup = fb.group({
      ingredient: fb.control(''),
    });
    // this is initializing the method form group, adding a control with an empty value to the form
    this.methodFormGroup = fb.group({
      step: fb.control(''),
    });
    // this is initializing the tag form group, adding a control with an empty value to the form
    this.tagFormGroup = fb.group({
      tag: fb.control(''),
    });
  }

  ngOnInit(): void {
   this.slug  = this.activatedRoute.snapshot.paramMap.get("slug");
   if (this.slug) {
      this.recipeService.getRecipeBySlug(this.slug).subscribe({
        next: recipe => {
          this.formGroup.patchValue(recipe);
          this.preview = recipe.heroImage;
          // go to recipe, ask for the ingredients, it gives us each ingredient one by one and we map the ingredient into a form control.
          // Finally, we store all of these controls in the const ingredientControls.
          const ingredientControls =  recipe.ingredients.map(ingredient => this.fb.control(ingredient));
          // tell ingredientsArray to use new shiny controls (ingredientControls) instead of whatever controls it had before.
          this.ingredientsArray.controls = ingredientControls;
          const methodControls =  recipe.method.map(method => this.fb.control(method));
          this.methodArray.controls = methodControls;
          const tagControls =  recipe.tags.map(tag => this.fb.control(tag));
          this.tagsArray.controls = tagControls;
        }
      })
   }
  }

  // image methods
  selectImage(event: any) {
    const selectedFiles = event.target.files;
    if (selectedFiles) {
      const file: File | null = selectedFiles.item(0);
      if (file) {
        this.preview = '';
        this.reader.onload = (e: any) => {
          this.preview = e.target.result;
          this.heroImageControl.setValue(this.preview);
        };
        this.reader.readAsDataURL(file);
      }
    }
  }

  // ingredients methods
  addIngredient(): void {
    const ingredientValue = this.ingredientFormGroup.get('ingredient').value;
    this.ingredientsArray.push(this.fb.control(ingredientValue));
    this.ingredientFormGroup.reset();
  }
  removeIngredient(controlIndex: number): void {
    this.ingredientsArray.removeAt(controlIndex);
  }

  // method step methods
  addMethodStep(): void {
    const methodStepValue = this.methodFormGroup.get('step').value;
    this.methodArray.push(this.fb.control(methodStepValue));
    this.methodFormGroup.reset();
  }
  removeMethodStep(controlIndex: number): void {
    this.methodArray.removeAt(controlIndex);
  }

  // tag methods
  addTag(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    if (value) {
      this.tagsArray.push(this.fb.control(value));
    }
    this.tagFormGroup.reset();
  }
  removeTag(controlIndex: number): void {
    this.tagsArray.removeAt(controlIndex);
  }

  // save/update recipe content method
  saveRecipe() {
    if (!this.slug) {
      this.recipeService
        .saveRecipe(this.formGroup.value)
        .subscribe({
          complete: () => this.router.navigateByUrl(`/recipes/${this.slugControl.value}`)
        });
        return
    }
    this.recipeService
      .updateRecipe(this.slug, this.formGroup.value)
      .subscribe({
        complete: () => this.router.navigateByUrl(`/recipes/${this.slugControl.value}`)
      });

  }

  // publish method
  publishRecipe() {
    this.isDraftControl.setValue(false);
    this.saveRecipe();
  }

  // save draft method
  saveDraft() {
    this.isDraftControl.setValue(true);
    this.saveRecipe();
  }

  // scheduled method
  openDialog() {
    const dialogRef = this.dialog.open(ConfirmScheduleDialogComponent);
    dialogRef.afterClosed().subscribe({
      next: (result) => {
      console.log('result:', result);
      if (result) {
        this.dateControl.setValue(result.date);
        this.publishRecipe();
      }
      }
    });

  }


}

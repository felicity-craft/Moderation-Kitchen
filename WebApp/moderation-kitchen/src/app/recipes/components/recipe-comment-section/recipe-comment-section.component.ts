import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RecipeComment } from '../../../core/interfaces/recipe-comment';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-recipe-comment-section',
  templateUrl: './recipe-comment-section.component.html',
  styleUrls: ['./recipe-comment-section.component.scss'],
})
export class RecipeCommentSectionComponent implements OnInit {
  @Input()
  public comments?: RecipeComment[];

  @Input()
  public title: string;

  @Output()
  public commentSubmittedEvent = new EventEmitter<RecipeComment>();

  submitComment() {
    this.formGroup.patchValue({date: new Date()})
    this.commentSubmittedEvent.emit(this.formGroup.value);
    this.formGroup.reset();
  }

  public formGroup: FormGroup;

  public get emailControl(): AbstractControl {
    return this.formGroup.get('email') as AbstractControl;
  }

  constructor(private snackBar: MatSnackBar, fb: FormBuilder) {
    this.formGroup = fb.group({
      email: [null, [Validators.email, Validators.required]],
      name: [null, [Validators.required]],
      comment: [null],
      rating: [null],
      date: [],
    })
  }

  ngOnInit(): void {}
}

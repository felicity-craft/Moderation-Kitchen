import { Component, Input,  OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-ingredient',
  templateUrl: './edit-ingredient.component.html',
  styleUrls: ['./edit-ingredient.component.scss']
})
export class EditIngredientComponent implements OnInit {

  @Input()
  public formGroup?: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  public icon?: string
}

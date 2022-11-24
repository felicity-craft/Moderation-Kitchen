import { Component, Input, OnInit } from '@angular/core';
import { Ingredient } from '../../../core/interfaces/ingredient';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.scss']
})
export class IngredientsComponent implements OnInit {

  @Input()
  public ingredients?: string[];

  constructor() { }

  ngOnInit(): void {
  }

}

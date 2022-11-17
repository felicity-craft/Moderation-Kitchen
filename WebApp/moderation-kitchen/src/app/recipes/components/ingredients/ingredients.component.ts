import { Component, Input, OnInit } from '@angular/core';
import { Ingredient } from '../../interfaces/ingredient';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.scss']
})
export class IngredientsComponent implements OnInit {

  @Input()
  public ingredients?: Ingredient[];

  constructor() { }

  ngOnInit(): void {
  }

}

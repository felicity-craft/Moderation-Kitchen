import { Component, Input,  OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-ingredient',
  templateUrl: './edit-ingredient.component.html',
  styleUrls: ['./edit-ingredient.component.scss']
})
export class EditIngredientComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  public icon?: string
}

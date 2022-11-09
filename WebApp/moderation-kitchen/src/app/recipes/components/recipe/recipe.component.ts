import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from 'xng-breadcrumb';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {

  constructor(
    private breadcrumbService: BreadcrumbService,
  ) { }

  ngOnInit(): void {
    this.breadcrumbService.set('@recipe', 'Chocolate chunk cookies')
  }

}

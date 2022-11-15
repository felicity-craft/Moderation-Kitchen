import { Component, Input, OnInit } from '@angular/core';
import { faStar, faStarHalfStroke } from '@fortawesome/free-regular-svg-icons';
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons';
import { RecipeRating } from '../../interfaces/recipe-rating';



@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {
  faStar = faStar;
  faStarHalfStroke = faStarHalfStroke;
  faStarSolid = faStarSolid;

  @Input()
  public rating?: RecipeRating;

  constructor() { }

  ngOnInit(): void {
  }

}

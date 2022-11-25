import { Component, Input, OnInit } from '@angular/core';
import { faStar, faStarHalfStroke } from '@fortawesome/free-regular-svg-icons';
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons';
import { Recipe } from 'src/app/core/interfaces/recipe';
import { RecipeRating } from 'src/app/core/interfaces/recipe-rating';



@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {
  
  @Input()
  rating: RecipeRating;

  iconClass = {
    0: faStar,
    0.5: faStarHalfStroke,
    1: faStarSolid,
  }

  stars: number[] = [0,0,0,0,0];

  constructor() { }

  ngOnChanges(){
    this.fillStars();
  }

  ngOnInit(): void {
    
  }

  fillStars(){
    var starsToFill = Math.round((this.rating?.averageRating || 0) * 2)/2; //round to nearest 0.5
    var i = 0;
    while(starsToFill > 0.5){
      this.stars[i] = 1;
      i++;
      starsToFill--;
    }
    if(starsToFill === 0.5){
      this.stars[i] = 0.5;
    }
  }
  
}

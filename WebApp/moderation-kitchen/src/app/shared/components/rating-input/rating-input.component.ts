import { Component, OnInit } from '@angular/core';
import { faStar, IconDefinition } from '@fortawesome/free-regular-svg-icons';
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-rating-input',
  templateUrl: './rating-input.component.html',
  styleUrls: ['./rating-input.component.scss'],
})
export class RatingInputComponent {
  faStar = faStar;
  faStarSolid = faStarSolid;
  public isHovered: boolean = false;

  public icon(star: number) : IconDefinition {
    if (this.isHovered) {
      return (star <= this.hoveredUserRating) ? faStarSolid : faStar;
    }
    return (star <= this.selectedUserRating) ? faStarSolid : faStar;
  }
  

  public stars: number[] = [1, 2, 3, 4, 5];

  public hoveredUserRating: number = 0;
  public selectedUserRating: number = 0;

  countStar(star: number) {
    if (star === this.selectedUserRating) {
      this.selectedUserRating = 0;
      return;
    }

    this.selectedUserRating = star;
  }

  hoverStar(star: number) {
    this.isHovered = star !== 0;
    this.hoveredUserRating = star;
  }
}

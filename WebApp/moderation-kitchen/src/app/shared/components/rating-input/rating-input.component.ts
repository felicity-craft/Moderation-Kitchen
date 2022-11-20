import { Component, OnInit } from '@angular/core';
import { faStar, IconDefinition } from '@fortawesome/free-regular-svg-icons';
import { faStar as faStarFilled } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-rating-input',
  templateUrl: './rating-input.component.html',
  styleUrls: ['./rating-input.component.scss'],
})
export class RatingInputComponent implements OnInit {
  faStar = faStar;
  faStarFilled = faStarFilled;
  public stars: number[] = [1, 2, 3, 4, 5];
  public hoveredUserRating: number;
  public selectedUserRating: number | null = null;
  public isHovered: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  // Whenever we hover over a star, the hoveredUserRating is updated
  hoverStar(star: number) {
    this.hoveredUserRating = star;
    if (star > 0) {
      this.isHovered = true;
    } else this.isHovered = false;
  }

  // Adding filled star to indicate what star rating the user is hovered over or has been selected.
  // The return type of getIcon() is IconDefinition which is a shared parent type of both faStar and faStarFilled.
  getIcon(star: number): IconDefinition {
    if (this.isHovered) {
      if (star <= this.hoveredUserRating) {
        return faStarFilled;
      }
      return faStar;
    } 
    else {
      if (star <= this.selectedUserRating) {
        return faStarFilled;
      }
      return faStar;
    }
  }

  clearHover() {
    this.hoverStar(0);
  }

  selectStar(star: number) {
    if (star == this.selectedUserRating) {
      this.selectedUserRating = 0;
    } else this.selectedUserRating = star;
  }
}

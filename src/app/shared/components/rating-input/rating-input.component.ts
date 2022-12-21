import { Component, forwardRef, Host, Input, OnInit, Optional, SkipSelf } from '@angular/core';
import { AbstractControl, ControlContainer, ControlValueAccessor, FormGroupDirective, NG_VALUE_ACCESSOR } from '@angular/forms';
import { faStar, IconDefinition } from '@fortawesome/free-regular-svg-icons';
import { faStar as faStarFilled } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-rating-input',
  templateUrl: './rating-input.component.html',
  styleUrls: ['./rating-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RatingInputComponent),
      multi: true,
    },
  ],
  viewProviders: [
    {
      provide: ControlContainer, 
      useExisting: FormGroupDirective,
    }
  ]
})

export class RatingInputComponent implements ControlValueAccessor, OnInit {
  @Input()
  public formControlName: string;
  public control: AbstractControl|null;
  faStar = faStar;
  faStarFilled = faStarFilled;
  public stars: number[] = [1, 2, 3, 4, 5];
  public hoveredUserRating: number;
  public selectedUserRating: number | null = null;
  public isHovered: boolean = false;

  constructor(
    // Give me a control container that is optional, from my parent element (e.g. recipe-comment-section), and if I provide one, don't use it.
    @Optional()
    @Host()
    @SkipSelf()
    private controlContainer: ControlContainer
  ) {}

  ngOnInit(): void {
    if (this.controlContainer) {
      if (this.formControlName) {
        this.control = this.controlContainer?.control?.get(this.formControlName);
      }
      else {
        console.warn(
          "Missing form control name directive from host element of the component"
          );
      }
    }
    else {
      console.warn(
        "Can't find parent FormGroup directive"
      );
    }
  }



  // From ControlValueAccessor interface. need to look up what they are doing!
  writeValue(value: number | null): void {
    this.selectedUserRating = value;
  }
  private onChanged = (value: number | null): void => undefined;
  registerOnChange(fn: (value: number | null) => void): void {
    this.onChanged = fn;
  }
  private onTouched = (): void => undefined;
  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

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
    } else {
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
    this.control.setValue(this.selectedUserRating);
  }
}

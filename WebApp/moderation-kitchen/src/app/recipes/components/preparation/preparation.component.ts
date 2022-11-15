import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-preparation',
  templateUrl: './preparation.component.html',
  styleUrls: ['./preparation.component.scss']
})
export class PreparationComponent implements OnInit {

  @Input()
  public prepTime?: string;
  
  @Input()
  public cookTime?: string;

  @Input()
  public quantitySizeMade?: string;

  constructor() { }

  ngOnInit(): void {
  }

}

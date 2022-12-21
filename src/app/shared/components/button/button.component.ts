import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input()
  public type?: string;

  @Input()  
  public icon?: string 
  
  @Input()
  public trailingIcon?: string 

  // @Input()
  // public disabled?: boolean

  constructor() { }

  ngOnInit(): void {
  }

}

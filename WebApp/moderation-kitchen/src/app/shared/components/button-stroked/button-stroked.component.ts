import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button-stroked',
  templateUrl: './button-stroked.component.html',
  styleUrls: ['./button-stroked.component.scss'],
})
export class ButtonStrokedComponent implements OnInit {
  @Input()
  public icon?: string;

  @Input()
  public trailingIcon?: string;

  @Output()
  clickEvent = new EventEmitter<MouseEvent>();

  constructor() {}

  ngOnInit(): void {}
  
  public handleClick(event: MouseEvent) {
    this.clickEvent.emit(event);
  }
}

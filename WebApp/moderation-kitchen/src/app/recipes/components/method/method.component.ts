import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-method',
  templateUrl: './method.component.html',
  styleUrls: ['./method.component.scss']
})
export class MethodComponent implements OnInit {

  @Input()
  public method?: string[];

  constructor() { }

  ngOnInit(): void {
  }

}

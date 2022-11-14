import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-method',
  templateUrl: './edit-method.component.html',
  styleUrls: ['./edit-method.component.scss']
})
export class EditMethodComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  public icon?: string
}

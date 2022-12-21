import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';


@Component({
  selector: 'app-page-container',
  templateUrl: './page-container.component.html',
  styleUrls: ['./page-container.component.scss']
})
export class PageContainerComponent implements OnInit {

  public showBreadcrumb: boolean = true;

  constructor( 
    location: Location
    ) { 
      this.showBreadcrumb = location.path()!=='';
    }

  ngOnInit(): void {
  }

}

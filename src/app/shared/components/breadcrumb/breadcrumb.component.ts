import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';

interface BreadcrumbItem
{
  path?: string
  text?: string
}

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {

  constructor(
    location: Location
    ) { 
      this.path = location.path();
    }

  ngOnInit(): void {
    this.BuildBreadcrumbs();

  }
  public  breadcrumbs: Array<BreadcrumbItem> = [];

  @Input()
  public path: string = ""


  private BuildBreadcrumbs(): void
  {
      var subPaths = this.path.split("/");
      this.breadcrumbs = [];

      var path = "";
      var isHome = true;
      for (const subPath of subPaths)
      {
          path += `${subPath}/`;
          this.breadcrumbs.push({
              path: path,
              // in the string subPath, find all occurrences of '-' and replace with a space. g stands for global
              text: isHome ? "home" : subPath.replace(/-/g, " "),
          });
          isHome = false;
      }
      //keep the last three breadcrumbs - (relevant when on mobile for admin and editing posts)
      this.breadcrumbs = this.breadcrumbs.slice(-3);
  }
}


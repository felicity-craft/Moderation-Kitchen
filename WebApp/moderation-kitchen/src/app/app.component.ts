import { Component } from '@angular/core';
import { Location } from '@angular/common';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'moderation-kitchen';

public showAdminHeader: boolean = true;

constructor(
  location: Location
  ) { 
    this.showAdminHeader = location.path().startsWith("/admin");
  }


}

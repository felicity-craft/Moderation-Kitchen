import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { AuthenticationService } from './shared/services/authentication.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'moderation-kitchen';

public showAdminHeader: boolean = true;

constructor(
  location: Location,
  private authService: AuthenticationService,
  ) { 
    this.showAdminHeader = this.authService.loggedIn();
  }


}
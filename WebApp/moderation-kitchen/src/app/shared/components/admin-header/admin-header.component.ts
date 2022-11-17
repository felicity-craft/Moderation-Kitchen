import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthenticationService } from '../../services/authentication.service';
import { ConfirmLogoutDialogComponent } from '../confirm-logout-dialog/confirm-logout-dialog.component';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.scss']
})
export class AdminHeaderComponent implements OnInit {

  public get showLogout(): boolean
  {
    return this.authService.loggedIn();
  }

  constructor(
    public dialog: MatDialog,
    private authService: AuthenticationService,
  ) { }

  ngOnInit(): void {
  }

  openDialog() {
    this.dialog.open(ConfirmLogoutDialogComponent);
  }
}

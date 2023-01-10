import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirm-logout-dialog',
  templateUrl: './confirm-logout-dialog.component.html',
  styleUrls: ['./confirm-logout-dialog.component.scss']
})
export class ConfirmLogoutDialogComponent implements OnInit {

  constructor( 
    private router: Router)
    { }

  ngOnInit(): void {
  }

  get isAdmin(){
    let is_admin = localStorage.getItem('is_admin');
    if(is_admin === 'on'){
      return true;
    }else{
      return false;
    }
  }

  logoutUser(){
    localStorage.removeItem('token');
    localStorage.removeItem('is_admin');
    window.location.href = '/admin/login';
    return true;
  }
}

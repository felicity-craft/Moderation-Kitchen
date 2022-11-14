import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from 'xng-breadcrumb';
import {MatDialog} from '@angular/material/dialog';
import { ConfirmActionDialogComponent } from '../confirm-action-dialog/confirm-action-dialog.component';


@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {

  constructor(
    private breadcrumbService: BreadcrumbService,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.breadcrumbService.set('@recipe', 'Chocolate chunk cookies')
  }

  openDialog() {
    this.dialog.open(ConfirmActionDialogComponent);
  }
}

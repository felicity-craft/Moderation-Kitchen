import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from 'xng-breadcrumb';
import {MatDialog} from '@angular/material/dialog';
import { ConfirmActionDialogComponent } from '../confirm-action-dialog/confirm-action-dialog.component';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {

  blogPosts!: Observable<{title: string, intro: string, body: string}[]>;

  constructor(
    private breadcrumbService: BreadcrumbService,
    public dialog: MatDialog,
    private http: HttpClient,
  ) { }

  ngOnInit(): void {
    this.breadcrumbService.set('@recipe', 'Chocolate chunk cookies')
    this.blogPosts = this.getBlogPost();
  }

  openDialog() {
    this.dialog.open(ConfirmActionDialogComponent);
  }

  getBlogPost(){
    return this.http.get<{title: string, intro: string, body: string}[]> ("/assets/blog-posts.json");
  }
}

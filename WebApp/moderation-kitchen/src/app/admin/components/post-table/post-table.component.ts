import { AfterViewInit, Component, Input, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { Recipe } from 'src/app/core/interfaces/recipe';


@Component({
  selector: 'app-post-table',
  templateUrl: './post-table.component.html',
  styleUrls: ['./post-table.component.scss']
})
export class PostTableComponent implements AfterViewInit, OnInit {
  displayedColumns: string[] = ['heroImage', 'title', 'date'];
  dataSource: MatTableDataSource<Recipe>;
  
  @Input()
  public recipes: Observable<Recipe[]>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  constructor() {
  }
  
  ngOnInit(): void {
    this.dataSource = new MatTableDataSource([]);
    this.recipes.subscribe({
      next: recipes => this.dataSource.data = recipes
    })
    this.dataSource.filterPredicate = (recipe, filter)=>{
      filter = filter.toLowerCase().trim();
      return recipe.title.toLowerCase().includes(filter);
    }
    console.log("recipes:", this.recipes);
  }


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}



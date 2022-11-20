import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BreadcrumbModule, BreadcrumbService } from 'xng-breadcrumb';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';

import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatChipsModule } from '@angular/material/chips';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDividerModule } from '@angular/material/divider';
import { MatSliderModule } from '@angular/material/slider';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatToolbarModule } from '@angular/material/toolbar';


import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ButtonComponent } from './components/button/button.component';
import { TagsComponent } from './components/tags/tags.component';
import { RatingInputComponent } from './components/rating-input/rating-input.component';
import { CardComponent } from './components/card/card.component';
import { SearchContainerComponent } from './components/search-container/search-container.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { ButtonStrokedComponent } from './components/button-stroked/button-stroked.component';
import { MatDialogModule } from '@angular/material/dialog';
import { PageContainerComponent } from './components/page-container/page-container.component';
import { AdminHeaderComponent } from './components/admin-header/admin-header.component';
import { ConfirmLogoutDialogComponent } from './components/confirm-logout-dialog/confirm-logout-dialog.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    MatButtonModule,
    MatSelectModule,
    MatTabsModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatChipsModule,
    MatCardModule,
    MatCheckboxModule,
    MatListModule,
    MatMenuModule,
    MatIconModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatSlideToggleModule,
    MatDividerModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
    MatDialogModule,
    MatToolbarModule,

    FontAwesomeModule,
    BreadcrumbModule,
    HttpClientModule,
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    ButtonComponent,
    TagsComponent,
    RatingInputComponent,
    CardComponent,
    SearchContainerComponent,
    BreadcrumbComponent,
    ButtonStrokedComponent,
    PageContainerComponent,
    AdminHeaderComponent,
    ConfirmLogoutDialogComponent,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    MatButtonModule,
    MatMenuModule,
    MatTabsModule,
    MatChipsModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatCheckboxModule,
    MatCardModule,
    MatListModule,
    MatSelectModule,
    MatIconModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatSlideToggleModule,
    MatDividerModule,
    MatSliderModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
    MatDialogModule,
    MatToolbarModule,

    HeaderComponent,
    FooterComponent,
    ButtonComponent,
    TagsComponent,
    RatingInputComponent,
    CardComponent,
    SearchContainerComponent,
    BreadcrumbComponent,
    ButtonStrokedComponent,
    PageContainerComponent,
    AdminHeaderComponent,
    ConfirmLogoutDialogComponent,

  ],
  providers:[
    BreadcrumbService,
  ]
})
export class SharedModule {
}

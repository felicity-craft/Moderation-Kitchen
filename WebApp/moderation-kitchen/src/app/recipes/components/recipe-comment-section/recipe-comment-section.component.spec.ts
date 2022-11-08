import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeCommentSectionComponent } from './recipe-comment-section.component';

describe('RecipeCommentSectionComponent', () => {
  let component: RecipeCommentSectionComponent;
  let fixture: ComponentFixture<RecipeCommentSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeCommentSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipeCommentSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

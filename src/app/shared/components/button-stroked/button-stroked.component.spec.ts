import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonStrokedComponent } from './button-stroked.component';

describe('ButtonStrokedComponent', () => {
  let component: ButtonStrokedComponent;
  let fixture: ComponentFixture<ButtonStrokedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonStrokedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonStrokedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

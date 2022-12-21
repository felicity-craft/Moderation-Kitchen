import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialMediaCallComponent } from './social-media-call.component';

describe('SocialMediaCallComponent', () => {
  let component: SocialMediaCallComponent;
  let fixture: ComponentFixture<SocialMediaCallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialMediaCallComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialMediaCallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheProfileToolbarComponent } from './the-profile-toolbar.component';

describe('ToolbarComponentComponent', () => {
  let component: TheProfileToolbarComponent;
  let fixture: ComponentFixture<TheProfileToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheProfileToolbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TheProfileToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

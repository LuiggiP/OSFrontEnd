import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheProfileInformationComponent } from './the-profile-information.component';

describe('ProfileInformationComponentComponent', () => {
  let component: TheProfileInformationComponent;
  let fixture: ComponentFixture<TheProfileInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheProfileInformationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TheProfileInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

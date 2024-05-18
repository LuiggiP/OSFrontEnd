import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileInformationComponentComponent } from './profile-information.component.component';

describe('ProfileInformationComponentComponent', () => {
  let component: ProfileInformationComponentComponent;
  let fixture: ComponentFixture<ProfileInformationComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileInformationComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfileInformationComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

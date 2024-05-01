import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationSharingComponent } from './location-sharing.component';

describe('LocationSharingComponent', () => {
  let component: LocationSharingComponent;
  let fixture: ComponentFixture<LocationSharingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LocationSharingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LocationSharingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

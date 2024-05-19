import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheStartComponent } from './the-start.component';

describe('MainScreenComponent', () => {
  let component: TheStartComponent;
  let fixture: ComponentFixture<TheStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheStartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TheStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

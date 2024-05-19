import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonRegisterSectionComponent } from './common-register-section.component';

describe('RegisterComponent', () => {
  let component: CommonRegisterSectionComponent;
  let fixture: ComponentFixture<CommonRegisterSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonRegisterSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommonRegisterSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

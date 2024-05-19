import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginContentComponentComponent } from './the-login-content.component';

describe('LoginContentComponentComponent', () => {
  let component: LoginContentComponentComponent;
  let fixture: ComponentFixture<LoginContentComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginContentComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginContentComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

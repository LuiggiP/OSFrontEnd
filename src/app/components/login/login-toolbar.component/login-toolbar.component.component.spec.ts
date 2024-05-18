import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginToolbarComponent } from './login-toolbar.component.component';

describe('LoginToolbarComponentComponent', () => {
  let component: LoginToolbarComponent;
  let fixture: ComponentFixture<LoginToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginToolbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

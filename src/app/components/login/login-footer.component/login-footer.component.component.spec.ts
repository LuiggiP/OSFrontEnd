import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginFooterComponentComponent } from './login-footer.component.component';

describe('LoginFooterComponentComponent', () => {
  let component: LoginFooterComponentComponent;
  let fixture: ComponentFixture<LoginFooterComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginFooterComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoginFooterComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

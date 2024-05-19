import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheLoginFooterComponent } from './the-login-footer.component';

describe('LoginFooterComponentComponent', () => {
  let component: TheLoginFooterComponent;
  let fixture: ComponentFixture<TheLoginFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheLoginFooterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TheLoginFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

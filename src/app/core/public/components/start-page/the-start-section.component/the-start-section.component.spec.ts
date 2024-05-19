import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainScreenComponentComponent } from './the-start-section.component';

describe('MainScreenComponentComponent', () => {
  let component: MainScreenComponentComponent;
  let fixture: ComponentFixture<MainScreenComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainScreenComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainScreenComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

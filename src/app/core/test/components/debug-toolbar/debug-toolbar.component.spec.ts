import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebugToolbarComponent } from './debug-toolbar.component';

describe('DebugToolbarComponent', () => {
  let component: DebugToolbarComponent;
  let fixture: ComponentFixture<DebugToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DebugToolbarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DebugToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

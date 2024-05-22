import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarComponentComponent } from './the-start-toolbar';

describe('ToolbarComponentComponent', () => {
  let component: ToolbarComponentComponent;
  let fixture: ComponentFixture<ToolbarComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToolbarComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToolbarComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

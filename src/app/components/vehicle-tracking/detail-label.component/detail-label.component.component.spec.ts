import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailLabelComponentComponent } from './detail-label.component.component';

describe('DetailLabelComponentComponent', () => {
  let component: DetailLabelComponentComponent;
  let fixture: ComponentFixture<DetailLabelComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailLabelComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailLabelComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

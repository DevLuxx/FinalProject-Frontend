import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayPlotsComponent } from './display-plots.component';

describe('DisplayPlotsComponent', () => {
  let component: DisplayPlotsComponent;
  let fixture: ComponentFixture<DisplayPlotsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplayPlotsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DisplayPlotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

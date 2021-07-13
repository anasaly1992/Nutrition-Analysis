import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NutritionAnalysisComponent } from './nutrition-analysis.component';

describe('NutritionAnalysisComponent', () => {
  let component: NutritionAnalysisComponent;
  let fixture: ComponentFixture<NutritionAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NutritionAnalysisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NutritionAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

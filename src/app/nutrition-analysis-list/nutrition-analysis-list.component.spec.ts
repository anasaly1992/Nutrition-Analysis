import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NutritionAnalysisListComponent } from './nutrition-analysis-list.component';

describe('NutritionAnalysisListComponent', () => {
  let component: NutritionAnalysisListComponent;
  let fixture: ComponentFixture<NutritionAnalysisListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NutritionAnalysisListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NutritionAnalysisListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

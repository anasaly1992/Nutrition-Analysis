import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NutritionAnalysisService } from '../services/nutrition-analysis.service';

@Component({
  selector: 'app-nutrition-analysis-list',
  templateUrl: './nutrition-analysis-list.component.html',
  styleUrls: ['./nutrition-analysis-list.component.css']
})
export class NutritionAnalysisListComponent implements OnInit {
  ingredientsList:any[]= [];
  objectToSend:any;
  totalDaily:any;
  showNutritionDaily = false;
  showLowQualityMessage = false;

  constructor(
    private nutritionAnalysisService: NutritionAnalysisService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.ingredientsList = this.nutritionAnalysisService.ingredientsList;
    if (this.ingredientsList == undefined) {
      this.router.navigate([""])
    }
    this.objectToSend = this.nutritionAnalysisService.objectToSend;
  }

  getTotalNutrition() {
    this.nutritionAnalysisService.nutritionAnalysis(this.objectToSend).subscribe(res => {
      this.totalDaily = res;
      this.showNutritionDaily = true;
    } ,(err) => {
      if (err.status == 555){
        this.showLowQualityMessage = true;
      }
    })

  }

}

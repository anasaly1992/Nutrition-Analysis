import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class NutritionAnalysisService {
  endpoint = 'https://api.edamam.com/api';
  appKey = 'b877d141efecf84bade95178e33bcae4';
  appId = '0fb219fd';
  ingredientsList:any;
  objectToSend:any;

  constructor(
    private http: HttpClient
  ) { }
  nutritionAnalysis(data:any) {
    return this.http.post(`${this.endpoint}/nutrition-details?app_key=${this.appKey}&app_id=${this.appId}`,data);
  }

  eachIngredianetNutritionAnalysis(data:any) {
    return this.http.get(`${this.endpoint}/nutrition-data?app_key=${this.appKey}&app_id=${this.appId}&ingr=${data}`);
  }
}

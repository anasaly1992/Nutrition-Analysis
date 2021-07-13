import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NutritionAnalysisService } from '../services/nutrition-analysis.service';
import { forkJoin } from "rxjs";
import { Router } from '@angular/router';



@Component({
  selector: 'app-nutrition-analysis',
  templateUrl: './nutrition-analysis.component.html',
  styleUrls: ['./nutrition-analysis.component.css']
})
export class NutritionAnalysisComponent implements OnInit {
  requestsArry:any[] = [];
  ingredients:any;
  objectToSend:any;
  ingredientsList:any[] = [];
  loader = false;
  nutritionForm = new FormGroup({
    ingr: new FormControl('', Validators.required),
  });
  units = ['pounds', 'gm', 'kilo','mg', 'cloves', 'tablespoon', 'teaspoons', 'cup','cups', 'inch', 'oz']



  constructor(
    private nutritionAnalysisService: NutritionAnalysisService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
    
  stringToArray(value: string): void {
    this.ingredients = value.trim().split("\n");
    this.objectToSend = {
      ingr: this.ingredients
    }

    this.nutritionAnalysisService.objectToSend = this.objectToSend
  }



  save() {
    this.loader = true;
    this.nutritionAnalysisService.nutritionAnalysis(this.objectToSend).subscribe(res =>{
    })

    // prepare requests array to send to server
    for (var request = 0; request < this.objectToSend.ingr.length; request++) {
      this.requestsArry[request] = this.nutritionAnalysisService.eachIngredianetNutritionAnalysis(this.objectToSend.ingr[request]);
    }

    // forkJoin Method from rxjs library which responsible for sending array of request
    // to get info for each ingredient
    forkJoin(this.requestsArry).subscribe((results) => {
      let foodName;
      this.ingredientsList = results;

       // a loop to fetch (food name , quantity and unit) from text area to show in view
      for (var request = 0; request < this.objectToSend.ingr.length; request++) {

        //regex help to get numbers 
        var regex = /\d+/g;

        // remove quantity from origin srting  (the rest = unit and food name)
        let quantityMatching = this.objectToSend.ingr[request].match(regex)
        this.objectToSend.ingr[request] = this.objectToSend.ingr[request].replace(quantityMatching, "");
        foodName = this.objectToSend.ingr[request].replace(quantityMatching, "");
          this.ingredientsList[request].quantity = quantityMatching

        // loop for matching the unit from textarea field with unit from units array
        for (var unit = 0; unit < this.units.length; unit++) {
          if (this.objectToSend.ingr[request].includes(this.units[unit])) {
            this.ingredientsList[request].unit = this.units[unit]

            // remove unit from origin srting  (the rest = food name)
            foodName = this.objectToSend.ingr[request].replace(this.units[unit], "");
            this.ingredientsList[request].food = foodName.trim()
          }
        }

        // assign ingredients list to ingredients list variable in shared service
        this.nutritionAnalysisService.ingredientsList = this.ingredientsList 
        }
        if (this.ingredientsList) {
          this.router.navigate(["nutritional-list"]);
        }
        this.loader = false;

    }, (error) => {
      this.loader = false;
    });
  }
}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NutritionAnalysisComponent } from './nutrition-analysis/nutrition-analysis.component';
import { NutritionAnalysisListComponent } from './nutrition-analysis-list/nutrition-analysis-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";

import {
  HttpClientModule,
} from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,
    NutritionAnalysisComponent,
    NutritionAnalysisListComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

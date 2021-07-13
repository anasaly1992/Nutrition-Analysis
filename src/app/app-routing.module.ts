
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NutritionAnalysisListComponent } from "./nutrition-analysis-list/nutrition-analysis-list.component";
import { NutritionAnalysisComponent } from "./nutrition-analysis/nutrition-analysis.component";
const routes: Routes = [
    {
        path: "",
        component: NutritionAnalysisComponent,
    },
    {
        path: "nutritional-list",
        component: NutritionAnalysisListComponent,
    }
  ];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
  })
export class AppRoutingModule {}
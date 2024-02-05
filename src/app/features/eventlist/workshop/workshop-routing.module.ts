import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { WorkshopComponent } from "./workshop.component";

const route:Routes=[
    { path:'',component:WorkshopComponent }
]
@NgModule({
    imports: [RouterModule.forChild(route)],
    exports: [RouterModule]
})
export class WorkshoproutingModule{}
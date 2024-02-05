import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { StartappComponent } from "./startapp.component";

const route:Routes=[
    { path:'',component:StartappComponent }
]
@NgModule({
    imports: [RouterModule.forChild(route)],
    exports: [RouterModule]
})
export class StartappRoutingModule{}
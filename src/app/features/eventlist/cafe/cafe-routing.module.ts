import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CafeComponent } from "./cafe.component";

const route:Routes=[
    { path:'',component:CafeComponent }
]
@NgModule({
    imports: [RouterModule.forChild(route)],
    exports: [RouterModule]
})
export class CafeRoutingModule{}
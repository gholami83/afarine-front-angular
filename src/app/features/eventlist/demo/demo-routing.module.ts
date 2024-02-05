import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DemoComponent } from "./demo.component";

const route:Routes=[
    { path:'',component:DemoComponent }
]
@NgModule({
    imports: [RouterModule.forChild(route)],
    exports: [RouterModule]
})
export class DemoeRoutingModule{}
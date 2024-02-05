import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ConferenceComponent } from "./conference.component";

const route:Routes=[
    { path:'',component:ConferenceComponent }
]
@NgModule({
    imports: [RouterModule.forChild(route)],
    exports: [RouterModule]
})
export class ConferenceRoutingModule{}
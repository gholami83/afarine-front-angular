import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MeetingComponent } from "./meeting.component";

const route:Routes=[
    { path:'',component:MeetingComponent }
]
@NgModule({
    imports: [RouterModule.forChild(route)],
    exports: [RouterModule]
})
export class MeetingRoutingModule{}
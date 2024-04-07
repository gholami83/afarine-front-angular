import { RouterModule, Routes } from "@angular/router";
import { ConsultComponent } from "./consult.component";
import { NgModule } from "@angular/core";

const route:Routes=[
    { path:'',component:ConsultComponent }
]
@NgModule({
    imports:[RouterModule.forChild(route)],
    exports:[RouterModule]
})
export class ConsultRoutingModule {}
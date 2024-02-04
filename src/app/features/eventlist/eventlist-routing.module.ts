import { RouterModule, Routes } from "@angular/router";
import { EventComponent } from "./event/event.component";
import { NgModule } from "@angular/core";
import { EventlistComponent } from "./eventlist.component";


const route:Routes = [
  { path:'',component:EventlistComponent},
  { path:':id',loadChildren: ()=>import('./event/event.module').then(m => m.EventModule) }
];
@NgModule({
    imports: [RouterModule.forChild(route)],
    exports: [RouterModule]
  })
  export class EventlistRoutingModule { }
  
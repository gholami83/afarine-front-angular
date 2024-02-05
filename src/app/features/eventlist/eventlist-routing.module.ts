import { RouterModule, Routes } from "@angular/router";
import { EventComponent } from "./event/event.component";
import { NgModule } from "@angular/core";
import { EventlistComponent } from "./eventlist.component";


const route:Routes = [
  { path:'',component:EventlistComponent},
  { path:'cafe/:id',loadChildren: ()=>import('./cafe/cafe.module').then(m => m.CafeModule) },
  { path:'conference/:id',loadChildren: ()=>import('./conference/conference.module').then(m => m.ConferenceModule) },
  { path:'demo/:id',loadChildren: ()=>import('./demo/demo.module').then(m => m.DemoModule) },
  { path:'meeting/:id',loadChildren: ()=>import('./meeting/meeting.module').then(m => m.MeetingModule) },
  { path:'startapp/:id',loadChildren: ()=>import('./startapp/startapp.module').then(m => m.StartappModule) },
  { path:'workshop/:id',loadChildren: ()=>import('./workshop/workshop.module').then(m => m.WorkshopModule) }, 
];
@NgModule({
    imports: [RouterModule.forChild(route)],
    exports: [RouterModule]
  })
  export class EventlistRoutingModule { }
  
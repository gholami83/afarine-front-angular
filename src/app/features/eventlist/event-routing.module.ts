import { Route,RouterModule } from "@angular/router";
import { EventComponent } from "../event/event.component";
import { NgModule } from "@angular/core";


const eventroute:Route[] =[
]

@NgModule({
    imports: [RouterModule.forRoot(eventroute)],
    exports: [RouterModule]
  })
  export class EventRoutingModule { }
  
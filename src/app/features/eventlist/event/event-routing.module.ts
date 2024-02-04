import { RouterModule, Routes } from '@angular/router'
import { EventComponent } from './event.component'
import { NgModule } from '@angular/core'


const route:Routes= [
    { path:'',component:EventComponent }
]
@NgModule({
    imports: [RouterModule.forChild(route)],
    exports: [RouterModule]
})
export class EventRoutingModule{ }  
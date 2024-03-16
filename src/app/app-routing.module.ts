import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { CarouselComponent } from './features/carousel/carousel.component';
import { UsersComponent } from './features/users/users.component';
import { UserComponent } from './features/users/user/user.component';
import { NotfoundComponent } from './features/notfound/notfound.component';
import { AboutComponent } from './features/about/about.component';
import { EventComponent } from './features/eventlist/event/event.component';
import { EventlistComponent } from './features/eventlist/eventlist.component';
import { HomeComponent } from './features/home/home.component';


const route: Routes = [
  { path:'',component:CarouselComponent,pathMatch:'full' },
  { path:'home',component:HomeComponent,pathMatch:'full' },
  { path:"events",loadChildren: () => import('./features/eventlist/eventlist.module').then(m=>m.EventlistModule) },
  { path:'**',redirectTo: '404'},
  { path:'404',component:NotfoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(route)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { CarouselComponent } from './features/carousel/carousel.component';
import { UsersComponent } from './features/users/users.component';
import { UserComponent } from './features/users/user/user.component';
import { NotfoundComponent } from './features/notfound/notfound.component';
import { AboutComponent } from './features/about/about.component';
import { EventComponent } from './features/event/event.component';

const approute: Route[] = [
  {
    path: '',
    component: CarouselComponent,
  },
  {
    path:'events/:id',component:EventComponent
  },
  {
    path: 'users',
    component: UsersComponent,
    children: [
      {
        path: ':name/:city',
        component: UserComponent,
      },
    ],
  },
  {
    path: '**',
    redirectTo:'notfound',
  },
  {
    path: 'notfound',
    component: NotfoundComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(approute)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

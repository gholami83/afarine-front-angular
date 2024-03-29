import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './features/notfound/notfound.component';

const routes: Routes = [
 { path: "", loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule) },
 { path: "events", loadChildren: () => import('./features/eventlist/eventlist.module').then(m => m.EventlistModule) },
 { path: '**', redirectTo: '404' },
 { path: '404', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

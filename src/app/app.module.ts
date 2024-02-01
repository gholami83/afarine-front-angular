import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { CarouselComponent } from './features/carousel/carousel.component';
import { Route, RouterModule } from '@angular/router';
import { UsersComponent } from './features/users/users.component';
import { AboutComponent } from './features/about/about.component';
import { UserComponent } from './features/users/user/user.component';
import { NotfoundComponent } from './features/notfound/notfound.component';
import { EventComponent } from './features/event/event.component';
import { EventlistComponent } from './features/eventlist/eventlist.component';
import { EventRoutingModule } from './features/eventlist/event-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CarouselComponent,
    UsersComponent,
    AboutComponent,
    UserComponent,
    NotfoundComponent,
    EventComponent,
    EventlistComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    EventRoutingModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
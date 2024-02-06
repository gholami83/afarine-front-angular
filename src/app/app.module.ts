import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { CarouselComponent } from './features/carousel/carousel.component';
import { Route, RouterModule } from '@angular/router';
import { UsersComponent } from './features/users/users.component';
import { AboutComponent } from './features/about/about.component';
import { UserComponent } from './features/users/user/user.component';
import { NotfoundComponent } from './features/notfound/notfound.component';
import { EventComponent } from './features/eventlist/event/event.component';
import { EventlistComponent } from './features/eventlist/eventlist.component';
import { CardUserComponent } from './shared/components/card-user/card-user.component';
import { CardInstituteComponent } from './shared/components/card-institute/card-institute.component';
import { CardCategoryComponent } from './shared/components/card-category/card-category.component';
import { CardDetailComponent } from './shared/components/card-detail/card-detail.component';
import { CardPosterComponent } from './shared/components/card-poster/card-poster.component';
import { CardFilterAsideComponent } from './shared/components/card-filter-aside/card-filter-aside.component';
import { CafeModule } from './features/eventlist/cafe/cafe.module';
import { ShareModule } from './shared/components/share/share.module';

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    UsersComponent,
    AboutComponent,
    UserComponent,
    NotfoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ShareModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
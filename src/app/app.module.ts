import { InjectionToken, Injector, NgModule } from '@angular/core';
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
import { GeneralService } from './services/general.service';

export function deviceNameProvider( USER_AGENT:string,SCREEN_HEIGHT:string,SCREEN_WIDTH:string ):string{
  return USER_AGENT+' '+SCREEN_HEIGHT+'  '+SCREEN_WIDTH 
  }
export const DEVICE_NAME = new InjectionToken<string>('DEVICE_NAME');
export const USER_AGENT =  new InjectionToken<string>('USRER_AGENT');
export const SCREEN_HEIGHT =  new InjectionToken<string>('SCREEN_WIDTH');
export const SCREEN_WIDTH =  new InjectionToken<string>('SCREEN_HEIGHT');

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
  providers: [
  { provide:'api_url',useValue:'127.0.0.1/events' },
  { provide: USER_AGENT, useValue:window.navigator.userAgent },
  { provide: SCREEN_WIDTH, useValue:window.screen.width },
  { provide: SCREEN_HEIGHT, useValue:window.screen.height},
  { provide: DEVICE_NAME, useFactory:deviceNameProvider}
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
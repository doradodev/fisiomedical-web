import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MaterializeModule } from 'angular2-materialize';
import { NgwWowModule } from 'ngx-wow';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { ServicesComponent } from './services/services.component';
import { HomeComponent } from './home/home.component';
import {RouterModule, Routes} from '@angular/router';
import { PanelComponent } from './panel/panel.component';
import { FooterComponent } from './footer/footer.component';
import { ServicesHomeComponent } from './services-home/services-home.component';
import {HttpModule} from '@angular/http';
import {DataServicesService} from './dataServices/data-services.service';
import {HttpClientModule} from '@angular/common/http';
import { WhatsappComponent } from './whatsapp/whatsapp.component';
import { AboutComponent } from './about/about.component';
import { AngularFireModule } from 'angularfire2';
import { PartnersComponent } from './partners/partners.component';


const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'service/:service', component: ServicesHomeComponent},
  {path: 'acerca', component: AboutComponent},
  ]

export const firebaseConfig = {

  apiKey: "AIzaSyBKzx0qDp62MdFkT4-zqWkk-OFN9HTpIqc",
  authDomain: "fisiomedical-web.firebaseapp.com",
  databaseURL: "https://fisiomedical-web.firebaseio.com",
  storageBucket: "fisiomedical-web.appspot.com",
  messagingSenderId: "373128385266"
};

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeaderComponent,
    ServicesComponent,
    HomeComponent,
    PanelComponent,
    FooterComponent,
    ServicesHomeComponent,
    WhatsappComponent,
    AboutComponent,
    PartnersComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    MaterializeModule,
    NgwWowModule.forRoot(),
    HttpClientModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [DataServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }

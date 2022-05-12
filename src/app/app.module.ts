import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';

import { SideMenuComponent } from './Components/side-menu/side-menu.component';
import { FormsModule } from '@angular/forms';
import { CardDesiegnDirective } from './Directives/card-desiegn.directive';
import { NationalIDPipe } from './Pipes/national-id.pipe';
import { CridtcardPipe } from './Pipes/cridtcard.pipe';

import { HomeComponent } from './Components/home/home.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
  
    SideMenuComponent,
    CardDesiegnDirective,
    NationalIDPipe,
    CridtcardPipe,
  
    HomeComponent,
    AboutUsComponent,
    ContactUsComponent,
    NotFoundComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

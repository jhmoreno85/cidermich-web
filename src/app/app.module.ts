import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { routing, appRoutingProviders } from './app.routing';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/sections/home/home.component';
import { AboutusComponent } from './components/sections/aboutus/aboutus.component';
import { TeamComponent } from './components/sections/team/team.component';
import { GalleryComponent } from './components/sections/gallery/gallery.component';
import { ContactusComponent } from './components/sections/contactus/contactus.component';
import { NotfoundComponent } from './components/sections/notfound/notfound.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutusComponent,
    TeamComponent,
    GalleryComponent,
    ContactusComponent,
    NotfoundComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
      appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

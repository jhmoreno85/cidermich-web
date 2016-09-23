import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from "./components/sections/home/home.component";
import { AboutusComponent } from "./components/sections/aboutus/aboutus.component";
import { TeamComponent } from "./components/sections/team/team.component";
import { GalleryComponent } from "./components/sections/gallery/gallery.component";
import { ContactusComponent } from "./components/sections/contactus/contactus.component";
import { NotfoundComponent } from "./components/sections/notfound/notfound.component";


const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'aboutus', component: AboutusComponent },
    { path: 'team',component: TeamComponent },
    { path: 'gallery', component: GalleryComponent },
    { path: 'contactus', component: ContactusComponent },
    { path: '**', component: NotfoundComponent }

];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

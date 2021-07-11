import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TvComponent } from './tv/tv.component';
import { MoviesComponent } from './movies/movies.component';
import { PeopleComponent } from './people/people.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ReactiveFormsModule } from '@angular/forms';
import{HttpClientModule}from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HomeHeaderComponent } from './home-header/home-header.component';
import { DetalisComponent } from './detalis/detalis.component';
import { TvdetalisComponent } from './tvdetalis/tvdetalis.component';
import { PersondetalisComponent } from './persondetalis/persondetalis.component';
import { SidebarComponent } from './sidebar/sidebar.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    TvComponent,
    MoviesComponent,
    PeopleComponent,
    NotfoundComponent,
    HomeHeaderComponent,
    DetalisComponent,
    TvdetalisComponent,
    PersondetalisComponent,
    SidebarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule, CarouselModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

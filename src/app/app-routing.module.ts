import { DetalisComponent } from './detalis/detalis.component';
import { PeopleComponent } from './people/people.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { TvComponent } from './tv/tv.component';
import { MoviesComponent } from './movies/movies.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { TvdetalisComponent } from './tvdetalis/tvdetalis.component';
import { PersondetalisComponent } from './persondetalis/persondetalis.component';
import { SidebarComponent } from './sidebar/sidebar.component';

const routes: Routes = [
  {path:'' ,redirectTo:'home' ,pathMatch:'full'},
  {path:'home' ,canActivate:[AuthGuard], component:HomeComponent},
  {path:'movies' ,canActivate:[AuthGuard],component:MoviesComponent},
  {path:'detalis/:id' ,canActivate:[AuthGuard], component:DetalisComponent},
  {path:'tv' ,canActivate:[AuthGuard], component:TvComponent},
  {path:'tvdetalis/:id' ,canActivate:[AuthGuard], component:TvdetalisComponent},
  {path: 'settings',loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule)},
  {path:'login' , component:LoginComponent}, 
  {path:'register' , component:RegisterComponent},
  {path:'navbar' , component:NavbarComponent},
  {path:'people' ,canActivate:[AuthGuard], component:PeopleComponent},
  {path:'persondetalis/:id' ,canActivate:[AuthGuard], component:PersondetalisComponent},
  {path:'sidebar' ,canActivate:[AuthGuard], component:SidebarComponent},
  {path:'**',component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

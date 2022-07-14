import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { StartComponent } from './start/start.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:"home",component: HomeComponent},
  {path:"start",component: StartComponent},
  {path:"login",component: LoginComponent},
  {path:"**",component: HomeComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Routes } from '@angular/router';

import { homeRoutes } from './pages/home/home.routes';
import { HomeComponent } from './pages/home/home.component';

import { loginRoutes } from './pages/login/login.routes';
import { LoginComponent } from './pages/login/login.component';

import { registerRoutes } from './pages/register/register.routes';
import { RegisterComponent } from './pages/register/register.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: homeRoutes,
  },
  {
    path: 'login',
    component: LoginComponent,
    children: loginRoutes,
  },
  {
    path: 'register',
    component: RegisterComponent,
    children: registerRoutes,
  },
];

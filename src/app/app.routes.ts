import { Routes } from '@angular/router';

import { homeRoutes } from './pages/home/home.routes';
import { HomeComponent } from './pages/home/home.component';

import { loginRoutes } from './pages/login/login.routes';
import { LoginComponent } from './pages/login/login.component';

import { registerRoutes } from './pages/register/register.routes';
import { RegisterComponent } from './pages/register/register.component';

import { authenticatorGuard } from './guards/authenticator.guard';
import { isAuthenticatedGuard } from './guards/isAuthenticated.guard';

export const routes: Routes = [
  {
    path: 'main',
    component: HomeComponent,
    canActivate: [authenticatorGuard],
    children: homeRoutes,
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [isAuthenticatedGuard],
    children: loginRoutes,
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [isAuthenticatedGuard],
    children: registerRoutes,
  },
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full',
  },
];

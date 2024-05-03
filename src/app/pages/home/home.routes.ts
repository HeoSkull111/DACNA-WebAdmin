import { Routes } from '@angular/router';

// module
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { EmployeesComponent } from './modules/employees/employees.component';
import { PermissionsComponent } from './modules/permissions/permissions.component';
import { RequestsComponent } from './modules/requests/requests.component';

export const homeRoutes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    title: 'Dashboard',
  },
  {
    path: 'employees',
    component: EmployeesComponent,
    title: 'Quản lý phân quyền',
  },
  {
    path: 'permissions',
    component: PermissionsComponent,
    title: 'Quản lý phân quyền',
  },
  {
    path: 'requests',
    component: RequestsComponent,
    title: 'Quản lý yêu cầu',
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
];

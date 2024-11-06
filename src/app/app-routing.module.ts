import { Routes } from '@angular/router';
import { AuthGuard } from '@auth0/auth0-angular';
import { LoginComponent } from './login/login.component';
import { TaskListComponent } from './task-list/task-list.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'tasks', component: TaskListComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: 'login' }
];

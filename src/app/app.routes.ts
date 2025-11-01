import { RegisterComponent } from './components/register/register.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { StaffLoginComponent } from './components/staff-login/staff-login.component';
import { LoginComponent } from './components/login/login.component';
import { ExpenseTrackerComponent } from './components/expense-tracker/expense-tracker.component';
import { AuthGuard } from './guards/auth.guard';
import { AboutComponent } from './components/about/about.component';





export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'admin-login', component: AdminLoginComponent },
  { path: 'staff-login', component: StaffLoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'track', component: ExpenseTrackerComponent },
  {
    path: 'track', component: ExpenseTrackerComponent,
    canActivate: [AuthGuard]
  },
  { path: 'about', component: AboutComponent },
  { path: '**', redirectTo: '' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}


import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
// import { routes } from './app.routes';
import { StaffLoginComponent } from './components/staff-login/staff-login.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,HomeComponent,StaffLoginComponent,AdminLoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'org-expense-tracker';
}


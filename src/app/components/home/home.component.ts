import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(private router: Router) {}

  navigateToLogin(role: string) {
    if (role === 'admin') {
      this.router.navigate(['/admin-login']);
    } else {
      this.router.navigate(['/staff-login']);
    }
  }
}

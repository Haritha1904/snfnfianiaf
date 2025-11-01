import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin-login',
  standalone: true,
  imports: [FormsModule],
  template: `
    <div class="login-container">
      <h2>Admin Login</h2>
      <form (ngSubmit)="login()">
        <input type="text" placeholder="Username" [(ngModel)]="username" name="username" required>
        <input type="password" placeholder="Password" [(ngModel)]="password" name="password" required>
        <button type="submit">Login</button>
      </form>
    </div>
  `,
  styles: [`
    .login-container {
      max-width: 350px;
      margin: 40px auto;
      padding: 20px;
      border: 1px solid #ccc;
      border-radius: 10px;
      text-align: center;
    }
    input, button {
      display: block;
      width: 100%;
      margin: 10px 0;
      padding: 10px;
    }
  `]
})
export class AdminLoginComponent {
  username = '';
  password = '';

  login() {
    if (this.username === 'admin' && this.password === 'admin123') {
      alert('Admin login successful ✅');
    } else {
      alert('Invalid credentials ❌');
    }
  }
}

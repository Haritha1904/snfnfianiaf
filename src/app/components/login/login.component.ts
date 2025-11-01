import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;
  submitted = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
    this.loginForm = this.fb.group({
      username: ['', [
        Validators.required,
        Validators.pattern(/^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).+$/)
      ]],
      password: ['', [
        Validators.required,
        Validators.pattern(/^\d+$/)
      ]]
    });
  }

  // ✅ Correct place for your login logic
  onSubmit() {
    this.submitted = true;

    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;

      // Simulate login (replace with real backend later)
      if (username && password) {
        this.authService.login(); // mark user as logged in
        alert('🎉 Login successful!');
        this.router.navigate(['/track']);
      }
      this.loginForm.reset();
      this.submitted = false;
    } else {
      alert('❌ Please correct the errors before submitting.');
    }
  }

  navigateTo(role: string) {
    if (role === 'login') {
      this.router.navigate(['/login']);
    } else {
      this.router.navigate(['/register']);
    }
  }
}


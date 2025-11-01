
// import { CommonModule } from '@angular/common';
// import { Component } from '@angular/core';
// import { FormBuilder, FormGroup, Validators ,FormsModule,ReactiveFormsModule} from '@angular/forms';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-register',
//   standalone: true,
//   imports: [ReactiveFormsModule,CommonModule],
//   templateUrl: './register.component.html',
//   styleUrls: ['./register.component.scss']
// })
// export class RegisterComponent {
//   registerForm: FormGroup;
//   submitted = false;

//   constructor(private fb: FormBuilder) {
//     this.registerForm = this.fb.group({
//       username: ['', [
//         Validators.required,
//         Validators.pattern(/^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).+$/)
//       ]],
//       email: ['', [
//         Validators.required,
//         Validators.pattern(/^[a-zA-Z0-9._%+-]+@gmail\.com$/)
//       ]],
//       password: ['', [
//         Validators.required,
//         Validators.pattern(/^\d+$/)
//       ]]
//     });
//   }

//   onSubmit() {
//     this.submitted = true;
//     if (this.registerForm.valid) {
//       console.log('Registration Successful!', this.registerForm.value);
//       alert('🎉 Registration successful!');
//       this.registerForm.reset();
//       this.submitted = false;
//     } else {
//       alert('❌ Please correct the errors before submitting.');
//     }
//   }
//   navigateTo(role: string) {
//     if (role === 'login') {
//       this.router.navigate(['/login']);
//     } else {
//       this.router.navigate(['/register']);
//     }
//   }
// }

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registerForm: FormGroup;
  submitted = false;

  // ✅ Add Router injection here
  constructor(private fb: FormBuilder, private router: Router) {
    this.registerForm = this.fb.group({
      username: ['', [
        Validators.required,
        Validators.pattern(/^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).+$/) // 1 capital, 1 number, 1 symbol
      ]],
      email: ['', [
        Validators.required,
        Validators.pattern(/^[a-zA-Z0-9._%+-]+@gmail\.com$/) // valid Gmail only
      ]],
      password: ['', [
        Validators.required,
        Validators.pattern(/^\d+$/) // numbers only
      ]]
    });
  }

  onSubmit() {
    this.submitted = true;

    if (this.registerForm.valid) {
      console.log('✅ Registration Successful!', this.registerForm.value);
      alert('🎉 Registration successful!');

      // ✅ Navigate to login after successful registration
      this.router.navigate(['/login']);

      this.registerForm.reset();
      this.submitted = false;
    } else {
      alert('❌ Please correct the errors before submitting.');
    }
  }

  // Optional: helper navigation method for Register/Login switch
  navigateTo(role: string) {
    if (role === 'login') {
      this.router.navigate(['/login']);
    } else {
      this.router.navigate(['/register']);
    }
  }
}

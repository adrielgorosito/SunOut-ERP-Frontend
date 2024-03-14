import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})

export class AuthComponent {
  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {}
  
  hide = true;

  loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });

  protected submit() {
    if (this.loginForm.invalid) this.router.navigate(['/login']);
    console.log("Logged in!");
  }
}

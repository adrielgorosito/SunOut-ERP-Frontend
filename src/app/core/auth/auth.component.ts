import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { User } from 'src/app/domain/user';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})

export class AuthComponent {
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authS: AuthService,
  ) {}
  
  hide = true;

  loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });

  protected submit() {
    if (this.loginForm.invalid) {
        // Show some error msg
        return;
    }
    
    const user = new User(
      this.loginForm.get('username')!.value!,
      this.loginForm.get('password')!.value!,
      0
    );

    const observer = {
      next: (token: string) => {
        // Successful: redirect based on user type
      },
      error: (error: any) => {
        switch (error.status) {
            case 0:
                // Server error
                break;
            case 401:
                // Unauthorized error
                break;
            default:
                console.log(error.statusText);
        }
      },
    };

    this.authS.login(user).subscribe(observer);
  }
}
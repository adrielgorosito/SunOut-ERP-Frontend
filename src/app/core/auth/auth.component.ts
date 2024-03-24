import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { User } from 'src/app/domain/user';
import { MatSnackBar } from '@angular/material/snack-bar';

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
    private snackBar: MatSnackBar
  ) {}
  
  hide = true;

  loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });

  protected submit() {
    if (this.loginForm.invalid) {
        this.showSnackBar('Usuario y/o contraseña incorrectos');
        return;
    }

    const user = new User(
      this.loginForm.get('username')!.value!,
      this.loginForm.get('password')!.value!,
      0
    );

    const observer = {
      next: (response: any) => {
        user.type = JSON.parse(response).type;
        console.log("Tipo:", user.type);

        // localStorage.setItem('token', response.token);
        // localStorage.setItem('user', JSON.stringify(user));
        /* PARA OBTENER EL USUARIO DESPUÉS, USAR JSON.parse: const user = JSON.parse(localStorage.getItem('user')); */
        if (user.type == 1) this.router.navigate(['/...admin'])
        else if (user.type == 2) this.router.navigate(['/...prod'])
        else this.router.navigate(['/...donde'])
      },
      error: (error: any) => {
        switch (error.status) {
            case 0:
                this.showSnackBar('Error del servidor');
                break;
            case 401:
                this.showSnackBar('Usuario y/o contraseña incorrectos');
                break;
            default:
                this.showSnackBar('Error inesperado');
        }
      },
    };

    this.authS.login(user).subscribe(observer);
  }

  showSnackBar(msg: string) {
    this.snackBar.open(msg, 'Cerrar', {
        duration: 5000,
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
    });
  }
}
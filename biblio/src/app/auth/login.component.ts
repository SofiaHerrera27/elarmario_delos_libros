// src/app/auth/login.component.ts
import { Component, EventEmitter, Output } from '@angular/core';
import { AuthService } from '../auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-login', // Corregido: cambiado de 'app-register' a 'app-login'
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './login.component.html', // Corregido: cambiado de './register.component.html' a './login.component.html'
    styleUrls: ['./login.component.css'], // Corregido: cambiado de './register.component.css' a './login.component.css'
  })
  
export class LoginComponent {
  correo = '';
  password = '';
  error = '';

  @Output() loginExitoso = new EventEmitter<void>();

  constructor(private auth: AuthService) {}

  login() {
    if (this.auth.login(this.correo, this.password)) {
      this.loginExitoso.emit();
    } else {
      this.error = 'Credenciales inválidas';
    }
  }
}
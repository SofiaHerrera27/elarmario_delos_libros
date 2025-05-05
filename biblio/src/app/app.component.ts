// src/app/app.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './auth.service';
import { LoginComponent } from './auth/login.component';
import { RegisterComponent } from './auth/register.component';
import { AdminComponent } from './admin.component';
import { UserComponent } from './user.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, LoginComponent, RegisterComponent, AdminComponent, UserComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  vista: 'login' | 'register' | 'admin' | 'user' | 'home' = 'home';

  constructor(public auth: AuthService) {}

  cambiarVista(nuevaVista: typeof this.vista) {
    this.vista = nuevaVista;
  }

  onLoginSuccess() {
    const usuario = this.auth.getUsuario();
    if (usuario?.rol === 'admin') this.vista = 'admin';
    else if (usuario?.rol === 'user') this.vista = 'user';
  }

  cerrarSesion() {
    this.auth.logout();
    this.vista = 'home';
  }
}

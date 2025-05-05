// src/app/auth/register.component.ts
import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Usuario } from './usuarios';
import { CommonModule } from '@angular/common'; // Añadido
import { FormsModule } from '@angular/forms'; // Añadido

@Component({
  selector: 'app-register',
  standalone: true, // Añadido: configurado como componente standalone
  imports: [CommonModule, FormsModule], // Añadido: importado módulos necesarios
  templateUrl: './register.component.html'
})
export class RegisterComponent {
  nombre = '';
  correo = '';
  password = '';
  rol: 'admin' | 'user' = 'user';
  mensaje = '';

  constructor(private auth: AuthService) {}

  registrar() {
    const nuevo: Usuario = {
      nombre: this.nombre,
      correo: this.correo,
      password: this.password,
      rol: this.rol
    };

    this.mensaje = this.auth.registrar(nuevo)
      ? 'Registro exitoso. Ahora puedes iniciar sesión.'
      : 'El correo ya existe.';
  }
}
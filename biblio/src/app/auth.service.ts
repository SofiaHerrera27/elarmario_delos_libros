// src/app/auth.service.ts
import { Injectable } from '@angular/core';
import { USUARIOS, Usuario } from './auth/usuarios';

@Injectable({ providedIn: 'root' })
export class AuthService {
  usuarioActual: Usuario | null = null;

  login(correo: string, password: string): boolean {
    const user = USUARIOS.find(u => u.correo === correo && u.password === password);
    if (user) {
      this.usuarioActual = user;
      return true;
    }
    return false;
  }

  registrar(usuario: Usuario): boolean {
    const existe = USUARIOS.find(u => u.correo === usuario.correo);
    if (!existe) {
      USUARIOS.push(usuario);
      return true;
    }
    return false;
  }

  logout() {
    this.usuarioActual = null;
  }

  getUsuario(): Usuario | null {
    return this.usuarioActual;
  }
}

// src/app/auth/usuarios.ts
export interface Usuario {
    nombre: string;
    correo: string;
    password: string;
    rol: 'admin' | 'user';
  }
  
  export const USUARIOS: Usuario[] = [
    { nombre: 'Admin', correo: 'admin@admin.com', password: '1234', rol: 'admin' },
    { nombre: 'Usuario', correo: 'user@user.com', password: '1234', rol: 'user' }
  ];
  
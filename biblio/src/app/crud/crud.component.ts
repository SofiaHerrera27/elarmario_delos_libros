// src/app/crud.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-crud-csv',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css'],
})
export class CrudCsvComponent {
  headers: string[] = [];
  registros: any[] = [];

  paginaActual: number = 0;
  tamanioPagina: number = 100;

  get totalPaginas(): number {
    return Math.ceil(this.registros.length / this.tamanioPagina);
  }

  onFileUpload(event: any): void {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      const text = reader.result as string;
      this.parseCSV(text);
    };
    reader.readAsText(file);
  }

  parseCSV(csvText: string): void {
    const lines = csvText.trim().split('\n');
    this.headers = lines[0].split(',').map(h => h.trim());

    this.registros = lines.slice(1).map(line => {
      const values = line.split(',').map(val => val.trim());
      const obj: any = {};
      this.headers.forEach((key, i) => {
        obj[key] = values[i] || '';
      });
      return obj;
    });

    this.paginaActual = 0;
  }

  agregarRegistro(): void {
    const nuevo: any = {};
    this.headers.forEach(header => nuevo[header] = '');
    this.registros.push(nuevo);
  }

  eliminarRegistro(index: number): void {
    const realIndex = index + this.paginaActual * this.tamanioPagina;
    this.registros.splice(realIndex, 1);
  }

  limpiarRegistros(): void {
    this.registros = [];
    this.headers = [];
    this.paginaActual = 0;
  }

  guardarComoCSV(): void {
    if (!this.registros.length || !this.headers.length) return;

    const csvContent = [
      this.headers.join(','),
      ...this.registros.map(row =>
        this.headers.map(header => `"${(row[header] || '').replace(/"/g, '""')}"`).join(',')
      )
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'nuevo_csv.csv';
    a.click();
    URL.revokeObjectURL(url);
  }
}

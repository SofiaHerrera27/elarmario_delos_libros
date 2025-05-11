import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrudCsvComponent } from './crud/crud.component';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, CrudCsvComponent],
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent {
  constructor(public auth: AuthService) {}
}

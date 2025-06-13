import { Component, OnInit } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { AdminService } from '@core/services/admin.service';
import { AdminHistory } from '@core/models/admin-history.model';

@Component({
  selector: 'app-admin-panel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss'],
  providers: [DatePipe]  // optional, if using DatePipe in TS
})
export class AdminPanelComponent implements OnInit {
  currentAdmins: AdminHistory[] = [];
  errorMessage = '';

  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.loadCurrentAdmins();
  }

  loadCurrentAdmins(): void {
    this.adminService.getCurrentAdmins().subscribe({
      next: (data: AdminHistory[]) => {
        this.currentAdmins = data;
      },
      error: () => {
        this.errorMessage = 'Failed to load current admins.';
      }
    });
  }
}

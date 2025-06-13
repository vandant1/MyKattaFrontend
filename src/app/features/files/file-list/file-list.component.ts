import { Component, OnInit } from '@angular/core';
import { FileService } from '@core/services/file.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-file-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './file-list.component.html',
  styleUrls: ['./file-list.component.scss']
})
export class FileListComponent implements OnInit {
  files: any[] = [];
  errorMessage = '';

  constructor(private fileService: FileService) {}

  ngOnInit(): void {
    this.loadFiles();
  }

  loadFiles(): void {
    this.fileService.getFilesByStudent(1).subscribe({
      next: (data) => {
        this.files = data;
      },
      error: () => {
        this.errorMessage = 'Failed to load files.';
      }
    });
  }

  downloadFile(fileId: number): void {
    this.fileService.downloadFile(fileId);
  }
}

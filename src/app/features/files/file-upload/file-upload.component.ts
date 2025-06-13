import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';  // for ngModel if needed
import { FileService } from '@core/services/file.service';

@Component({
  selector: 'app-file-upload',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent {
  selectedFile: File | null = null;
  message: string = '';

  constructor(private fileService: FileService) {}

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  uploadFile(): void {
    if (!this.selectedFile) {
      this.message = '📄 Please select a file to upload.';
      return;
    }

    const formData = new FormData();
    formData.append('file', this.selectedFile as Blob);

    this.fileService.uploadFile(formData, 1).subscribe({
      next: () => {
        this.message = '✅ File uploaded successfully!';
        this.selectedFile = null;
      },
      error: () => {
        this.message = '❌ File upload failed. Try again.';
      }
    });
  }
}

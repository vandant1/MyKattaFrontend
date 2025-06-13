export interface FileRecord {
  id: number;
  studentId: number;
  fileName: string;
  description: string;
  fileType: 'PDF' | 'IMAGE' | 'VIDEO' | 'OTHER';
  uploadTime: string;
  downloadCount: number;
}

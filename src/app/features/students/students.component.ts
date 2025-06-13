import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentService } from '@core/services/student.service';
import { Student } from '@core/models/student.model';

@Component({
  selector: 'app-students',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {
  students: Student[] = [];
  loading = true;
  error = '';

  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    this.studentService.getTopContributors(10).subscribe({
      next: (data: Student[]) => {
        this.students = data;
        this.loading = false;
      },
      error: () => {
        this.error = 'Failed to load top contributors.';
        this.loading = false;
      }
    });
  }
}

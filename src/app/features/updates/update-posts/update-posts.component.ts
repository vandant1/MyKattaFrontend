import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';  // ✅ this was missing
import { UpdatePostService } from '@core/services/update-post.service';
import { UpdatePost } from '@core/models/update-post.model';

@Component({
  selector: 'app-update-posts',
  standalone: true,        // ✅ confirm it's standalone
  imports: [CommonModule], // ✅ this fixes *ngIf, *ngFor, date pipe, ngClass
  templateUrl: './update-posts.component.html',
  styleUrls: ['./update-posts.component.scss']
})
export class UpdatePostsComponent implements OnInit {
  posts: UpdatePost[] = [];
  loading = true;
  error = '';

  constructor(private updatePostService: UpdatePostService) {}

  ngOnInit(): void {
    this.updatePostService.getTopLevelPosts().subscribe({
      next: (data: UpdatePost[]) => {
        this.posts = data;
        this.loading = false;
      },
      error: () => {
        this.error = 'Failed to load updates.';
        this.loading = false;
      }
    });
  }
}

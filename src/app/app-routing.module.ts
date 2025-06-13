import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';

// Components
import { LoginComponent } from './features/login/login.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { StudentsComponent } from './features/students/students.component';
import { FileUploadComponent } from './features/files/file-upload/file-upload.component';
import { FileListComponent } from './features/files/file-list/file-list.component';
import { UpdatePostsComponent } from './features/updates/update-posts/update-posts.component';
import { AdminPanelComponent } from './features/admin/admin-panel/admin-panel.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [authGuard],
    children: [
      { path: 'students', component: StudentsComponent },
      { path: 'file-upload', component: FileUploadComponent },
      { path: 'file-list', component: FileListComponent },
      { path: 'updates', component: UpdatePostsComponent },
      { path: 'admin', component: AdminPanelComponent },
    ]
  },
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

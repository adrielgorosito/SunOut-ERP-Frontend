import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './core/auth/auth.component';
import { AdminComponent } from './features/admin/admin.component';

const routes: Routes = [
  { path: 'login', component: AuthComponent },
  { path: 'admin', component: AdminComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [RouterModule],
})
export class AppRoutingModule { }
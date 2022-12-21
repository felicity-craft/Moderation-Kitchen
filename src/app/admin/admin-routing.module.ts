import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { AuthGuard } from '../shared/guards/auth.guard';



const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    component: AdminHomeComponent,
    canActivate : [AuthGuard]
  },


  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}

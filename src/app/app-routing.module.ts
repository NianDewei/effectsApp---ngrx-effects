import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './pages/users/list/list.component';
import { UserComponent } from './pages/users/user/user.component';

const routes: Routes = [
  { path: 'home', component: ListComponent },
  { path: 'user/:id', component: UserComponent },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

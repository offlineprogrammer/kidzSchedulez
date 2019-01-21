import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'new-kid', loadChildren: './new-kid/new-kid.module#NewKidPageModule' },
  { path: 'planz/:id', loadChildren: './planz/planz.module#PlanzPageModule' },
  { path: 'taskz', loadChildren: './taskz/taskz.module#TaskzPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

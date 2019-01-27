import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'new-kid', loadChildren: './new-kid/new-kid.module#NewKidPageModule' },
  { path: 'planz/:id', loadChildren: './planz/planz.module#PlanzPageModule' },
  { path: 'taskz/:kid_id/:plan_id', loadChildren: './taskz/taskz.module#TaskzPageModule' },
  { path: 'task-details/:task_id/', loadChildren: './task-details/task-details.module#TaskDetailsPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

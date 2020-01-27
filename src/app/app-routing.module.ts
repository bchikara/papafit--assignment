import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EditTaskComponent } from './edit-task/edit-task.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'add',component:EditTaskComponent},
  {path:'edit/:id',component:EditTaskComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }

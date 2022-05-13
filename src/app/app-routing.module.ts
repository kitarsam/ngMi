import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CvComponent } from './cv/cv/cv.component';
import { TodoComponent } from './todo/todo/todo.component';
import { MiniWordComponent } from './directives/mini-word/mini-word.component';
import { ColorComponent } from './components/color/color.component';
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second/second.component';
import { DetailCvComponent } from './cv/detail-cv/detail-cv.component';
import { NF404Component } from './components/nf404/nf404.component';
import { LoginComponent } from './login/login.component';
import { AddCvComponent } from './cv/add-cv/add-cv.component';
import { AuthGuard } from './auth/guard/auth.guard';

const routes: Routes = [
  { path: '', component: FirstComponent },
  { path: 'cv', component: CvComponent },
  { path: 'cv/add', component: AddCvComponent, canActivate: [AuthGuard] },
  { path: 'cv/:id', component: DetailCvComponent },
  { path: 'todo', component: TodoComponent },
  { path: 'word', component: MiniWordComponent },
  { path: 'login', component: LoginComponent },
  { path: 'color/:myColor/:myDefaultColor', component: ColorComponent },
  { path: ':qqechose', component: SecondComponent },
  { path: '**', component: NF404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

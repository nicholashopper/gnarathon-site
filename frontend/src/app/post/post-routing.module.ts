import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { PostComponent }    from './post.component';
import { AboutComponent }   from '../about/about.component';

 
const routes: Routes = [
  { path: 'post',  redirectTo: '/', pathMatch: 'full' },
  { path: 'post/:slug', component: PostComponent }
];
 
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }
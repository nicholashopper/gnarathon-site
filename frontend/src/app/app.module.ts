// Imports
import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';


// Declarations
import { AppComponent }         from './app.component';
import { AppRoutingModule } from './app.routes';
import { HomeComponent }         from './home.component';
import { ErrorComponent }         from './404.component';

import { PostRoutingModule }          from './post/post-routing.module';
import { PostComponent }          from './post/post.component';
import { PostService } from './post/post.service';

import { BlogService }          from './blog/blog.service';
import { BlogRoutingModule } from './blog/blog-routing.module';
import { BlogListComponent }   from './blog/blog-list.component';


import { ProjectsComponent }      from './projects/projects.component';
import { ProjectsService } from './projects/projects.service';
import { ProjectsRoutingModule } from './projects/projects-routing.module';

import { AboutComponent }  from './about/about.component';
import { ContactComponent }      from './contact/contact.component';



// Decorator
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    PostRoutingModule,
    BlogRoutingModule,
    ProjectsRoutingModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    BlogListComponent,
    AboutComponent,
    ProjectsComponent,
    ContactComponent,
    HomeComponent,
    ErrorComponent,
    PostComponent
  ],
  providers: [
    BlogService,
    PostService,
    ProjectsService
  ],
  bootstrap: [ 
    AppComponent
 ]
})
export class AppModule {
    // Module class
}
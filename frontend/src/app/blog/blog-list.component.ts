import { Component, OnInit } from '@angular/core';
import { BlogService } from './blog.service'
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';
import { Post } from './post'


@Component({
  selector: 'blog-list',
  providers: [ BlogService ],
  template: `


  <div class="updates">
  <div class="demo-layout-transparent_sub mdl-layout mdl-js-layout mdl-layout--fixed-header">
      <header class="mdl-layout__header mdl-layout__header--transparent">
        <div class="mdl-layout__header-row">

          <!-- Title -->
          <span class="mdl-layout-title"></span>

          <!-- Add spacer, to align navigation to the right -->
          <div class="mdl-layout-spacer"></div>

          <!-- Navigation with router directives-->
          <nav class="mdl-navigation">
            <a class="mdl-navigation__link" [routerLink]="['/updates/wlc']">Waco Longboard Cult</a>
            <a class="mdl-navigation__link" [routerLink]="['/updates/gnarathon']">Gnarathon Events</a>
          </nav>
        </div>
      </header>

      <main class="mdl-layout__content">
        <h1 class="header-text">Whats in the works?</h1>
      </main>
    </div>
    </div>

  <div class="container">
    <ul class="demo-list-icon mdl-list">
      <li class="mdl-list__item" *ngFor="let post of posts">
        <a class="post-button" [routerLink]="['/post', post.slug]">
          <div>
              <h3>{{post.title}}</h3>
              <h5>{{post.posted |  date:'MM/dd/yyyy'}}</h5>
          </div>
        </a>
    </ul>
    <p class="error" *ngIf="errorMessage">{{errorMessage}}</p>
  </div>`
})


// Component class implementing OnInit
export class BlogListComponent implements OnInit {
  page: string;
  private sub: any;

  errorMessage: string;
  posts: Post[];
  mode = 'Observable';
 

  constructor (private route: ActivatedRoute, private blogService: BlogService) {}
 
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.page = params['page']; 
       this.getPosts();
    });
  }

  getPosts() {
      this.blogService.getPosts(this.page)
           .subscribe(
             posts => this.posts = posts,
             error =>  this.errorMessage = <any>error);
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
} 
import { Component, OnInit } from '@angular/core';
import { ProjectsService } from './projects.service'
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../blog/post'



@Component({
  template: `
  	<div class="history">
  	<div class="demo-layout-transparent_sub mdl-layout mdl-js-layout mdl-layout--fixed-header">
      <header class="mdl-layout__header mdl-layout__header--transparent">
        <div class="mdl-layout__header-row">

          <!-- Title -->
          <span class="mdl-layout-title"></span>

          <!-- Add spacer, to align navigation to the right -->
          <div class="mdl-layout-spacer"></div>

          <!-- Navigation with router directives-->
          <nav class="mdl-navigation">
            <a class="mdl-navigation__link" [routerLink]="['/history/events']">Events</a>
            <a class="mdl-navigation__link" [routerLink]="['/history/halloffame']">Winners</a>
          </nav>
        </div>
      </header>

      <main class="mdl-layout__content">
        <h1 class="header-text">8 years of Gnarathon</h1>
      </main>
    </div>
    </div>

    <div class="container">
    <div class="container">
    <ul class="demo-list-icon mdl-list">
      <li class="mdl-list__item" *ngFor="let post of posts">
        <a class="post-button" [routerLink]="['/post', post.slug]">
          <div>
              <h3>{{post.title}}</h3>
          </div>
        </a>
    </ul>
    <p class="error" *ngIf="errorMessage">{{errorMessage}}</p>
  </div>`
})

// Component class
export class ProjectsComponent  implements OnInit {
  type: string;
  private sub: any;

  errorMessage: string;
  posts: Post[];
  mode = 'Observable';
 

  constructor (private route: ActivatedRoute, private projectsService: ProjectsService) {}
 
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.type = params['type']; 
       this.getProjects();
    });
  }

  getProjects() {
      this.projectsService.getProjects(this.type)
           .subscribe(
             posts => this.posts = posts,
             error =>  this.errorMessage = <any>error);
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
} 
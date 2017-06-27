import { Component, OnInit, OnDestroy } from '@angular/core';
import { BrowserModule, DomSanitizer, SafeHtml  } from '@angular/platform-browser'
import { ActivatedRoute } from '@angular/router';
import { PostService } from './post.service';
import { Post } from '../blog/post';

@Component({
  selector: 'post-details',
  providers: [ PostService ],
  template: `
    <div class="container">
      <div class="page" *ngFor="let post of posts">
        <h1>{{post.title}}</h1>
        <h5>Updated: {{post.posted |  date:'MM/dd/yyyy'}}</h5>
        <div [innerHTML]="getHtml(post.body)"></div>
      </div>
      <p *ngIf="posts?.length < 1"><br>Whoops! post/{{slug}} does not exist.</p>
    </div>
  `,
})
export class PostComponent implements OnInit, OnDestroy {
  slug: string;
  private sub: any;
  errorMessage: string;
  posts: Post[];
  mode = 'Observable';

  constructor(private route: ActivatedRoute, private postService: PostService, private sanitizer: DomSanitizer) {}

  getPosts() {
      this.postService.getPosts(this.slug)
           .subscribe(
             posts => this.posts = posts,
             error =>  this.errorMessage = <any>error);
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.slug = params['slug']; 
    });
    this.getPosts();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  getHtml(html: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
}

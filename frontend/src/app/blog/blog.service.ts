import { Injectable }              from '@angular/core';
import { Response, Jsonp, Http, URLSearchParams }          from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Post } from './post';
 
@Injectable()
export class BlogService {
  private postsUrl = '/api/content/';

  constructor (private http: Http) {}
 
  getPosts(page: string): Observable<Post[]> {
  	let params = new URLSearchParams();
  	params.set('purpose', 'updates');
  	params.set('category', page);
    return this.http.get(this.postsUrl, { search: params })
                    .map(res => res.json());
  }
}

import { Injectable }              from '@angular/core';
import { Response, Jsonp, Http, URLSearchParams }          from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Post } from '../blog/post';
 
@Injectable() 
export class PostService {
  private postUrl = '/api/content/';

  constructor (private http: Http) {}
 
  getPosts(slug: string): Observable<Post[]> {
  	let params = new URLSearchParams();
  	params.set('slug', slug);
    return this.http.get(this.postUrl, { search: params })
                    .map(res => res.json());
  }
}

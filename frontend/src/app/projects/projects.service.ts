import { Injectable }              from '@angular/core';
import { Response, Jsonp, Http, URLSearchParams }          from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Post } from '../blog/post';
 
@Injectable()
export class ProjectsService {
  private postsUrl = '/api/content/';

  constructor (private http: Http) {}
 
  getProjects(type: string): Observable<Post[]> {
  	let params = new URLSearchParams();
  	params.set('purpose', 'history');
  	params.set('category', type);
    return this.http.get(this.postsUrl, { search: params })
                    .map(res => res.json());
  }
}

import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IComment, IPost} from "../models";


@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private url = 'https://jsonplaceholder.typicode.com';

  constructor(private httpClient: HttpClient) {
  }

  getPosts(): Observable<IPost[]> {
    return this.httpClient.get<IPost[]>(this.url + '/posts');
  }

  getPostComments(id: string): Observable<IComment[]> {
    return this.httpClient.get<IComment[]>(this.url + '/comments?postId=' + id);
  }

}

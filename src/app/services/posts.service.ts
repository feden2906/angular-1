import {Injectable} from '@angular/core';
import {IPost} from "../models/post";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private url = 'https://jsonplaceholder.typicode.com/posts'

  constructor(private http: HttpClient) {
  }

  getPosts(): Observable<IPost[]> {
    return this.http.get<IPost[]>(this.url)
  }

}

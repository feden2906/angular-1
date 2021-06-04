import {Injectable} from '@angular/core';
import {Resolve} from "@angular/router";
import {IPost} from "../models";
import {Observable} from "rxjs";
import {PostsService} from "./posts.service";

@Injectable({
  providedIn: 'root'
})
export class PostsResolveService implements Resolve<IPost[]> {

  constructor(private postsService: PostsService) {
  }

  resolve(): Observable<IPost[]> {
    return this.postsService.getPosts();
  }
}

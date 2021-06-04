import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {IPost} from "../../models";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {

  posts: IPost[];

  constructor(private activatedRoute: ActivatedRoute) {
     this.activatedRoute.data.subscribe(value => this.posts = value.allPosts)
  }


}

import { Component, OnInit } from '@angular/core';
import {IPost} from "../../models/post";
import {PostsService} from "../../services/posts.service";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: IPost[]

  constructor(private postsService : PostsService) { }

  ngOnInit(): void {
    this.postsService.getPosts().subscribe(value => {
      this.posts = value
    })
  }

}

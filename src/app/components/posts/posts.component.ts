import {Component, Input, OnInit} from '@angular/core';
import {IPost} from "../../models/post";
import {PostsService} from "../../services/posts.service";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  @Input()
  userId: number;

  posts: IPost[];

  constructor(private postService: PostsService) {
  }

  ngOnInit(): void {
    this.postService.getPosts(this.userId).subscribe(value => this.posts = value)
  }

}

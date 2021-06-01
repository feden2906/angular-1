import {Component} from '@angular/core';
import {IPost} from "../../models/Post";
import {ActivatedRoute} from "@angular/router";
import {PostService} from "../../services/post.service";

@Component({
  selector: 'app-post-description',
  templateUrl: './post-description.component.html',
  styleUrls: ['./post-description.component.css']
})
export class PostDescriptionComponent {

  singlePost: IPost;

  constructor(private activatedRoute: ActivatedRoute, private postService: PostService) {
    this.activatedRoute.params.subscribe(params => {
      this.postService.getPost(params.id).subscribe(data => this.singlePost = data)
    })
  }
}

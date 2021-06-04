import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {IComment} from "../../models";
import {PostsService} from "../../services";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  comments: IComment[];

  constructor(private activatedRoute: ActivatedRoute, private postsService: PostsService) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(value => {
      this.postsService.getPostComments(value.id).subscribe(data => this.comments = data);
    })
  }
}

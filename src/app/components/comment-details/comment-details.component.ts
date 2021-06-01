import {Component,} from '@angular/core';
import {IComment} from "../../models/Comment";
import {ActivatedRoute} from "@angular/router";
import {CommentService} from "../../services/comment.service";

@Component({
  selector: 'app-comment-details',
  templateUrl: './comment-details.component.html',
  styleUrls: ['./comment-details.component.css']
})
export class CommentDetailsComponent {

  singleComment: IComment;

  constructor(private activatedRoute: ActivatedRoute, private commentService: CommentService) {
    this.activatedRoute.params.subscribe(params => {
      this.commentService.getComment(params.id).subscribe(value => this.singleComment = value)
    })
  }


}

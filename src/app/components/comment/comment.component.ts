import {Component, Input} from '@angular/core';
import {IComment} from "../../models/Comment";
import {ActivatedRoute, Router} from "@angular/router";
import {CommentService} from "../../services/comment.service";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent{

  @Input()
  comment : IComment;

  singleComment: IComment;

  constructor(private activatedRoute: ActivatedRoute, private commentService: CommentService) {

  }
  openDetails(): void {
    this.activatedRoute.params.subscribe(params => {
      this.commentService.getComment(params.id).subscribe(data => this.singleComment = data)
    })
  }


}

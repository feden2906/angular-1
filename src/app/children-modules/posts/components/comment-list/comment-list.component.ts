import {Component, Input} from '@angular/core';
import {IComment} from "../../models";

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent {

  @Input()
  item: IComment;

}

import {Component, Input} from '@angular/core';
import {IPost} from "../../../posts/models";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent {

  @Input()
  item: IPost;
}

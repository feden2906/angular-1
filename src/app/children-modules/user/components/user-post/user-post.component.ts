import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UsersService} from "../../services";
import {IPost} from "../../../posts/models";

@Component({
  selector: 'app-user-post',
  templateUrl: './user-post.component.html',
  styleUrls: ['./user-post.component.css']
})
export class UserPostComponent implements OnInit {

  postsList: IPost[];

  constructor(private activatedRoute: ActivatedRoute, private usersService: UsersService) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(value => {
      this.usersService.getUserPost(value.id).subscribe(data => this.postsList = data);
    })
  }

}

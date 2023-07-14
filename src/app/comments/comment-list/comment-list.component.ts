import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {CommentService} from "../../services/comment.service";

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit{
  @Input() postId!:string;
  cmtCount:number = 0;
  comments!:Array<any>;
  constructor(private cmtService:CommentService) {

  }

  ngOnInit(): void {
    this.cmtService.loadComment(this.postId,3).subscribe(data=>{
      this.comments = data;
      this.cmtCount = this.comments.length;
    })
  }


}

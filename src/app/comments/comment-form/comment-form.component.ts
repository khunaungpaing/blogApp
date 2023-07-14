import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CommentService} from "../../services/comment.service";

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css']
})
export class CommentFormComponent implements OnInit{

  @Input() postId!:string;
  cmtForm!:FormGroup;

  constructor(private fb:FormBuilder,private cmtService:CommentService) {

  }

  ngOnInit(): void {
    this.cmtForm = this.fb.group({
      username: ['', Validators.required],
      comment: ['', Validators.required]
    });
  }

  onSubmit() {
    const cmtData = {
      username: this.cmtForm.controls['username'].value,
      comment: this.cmtForm.controls['comment'].value,
      postId: this.postId,
      createdAt: new Date()
    }
    this.cmtService.saveComment(cmtData);
    this.cmtForm.reset();
  }
}

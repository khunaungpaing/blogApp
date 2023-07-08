import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PostService} from "../../services/post.service";

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit {
  post: any;
  similarPost!: Array<any>;

  constructor(private router: ActivatedRoute, private postService: PostService) {
  }

  ngOnInit(): void {
    this.router.params.subscribe(val => {
      this.postService.findById(val['id']).subscribe(data => {
        this.post = data;
        this.loadSimilarPost(this.post?.['category']?.['categoryId'])
      })
    })

  }

  loadSimilarPost(catId: string) {
    this.postService.loadCategoryPost(catId, 4).subscribe(val => {
      this.similarPost = val;
    })
  }
}

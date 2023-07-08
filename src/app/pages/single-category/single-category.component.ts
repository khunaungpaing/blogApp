import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PostService} from "../../services/post.service";

@Component({
  selector: 'app-single-category',
  templateUrl: './single-category.component.html',
  styleUrls: ['./single-category.component.css']
})
export class SingleCategoryComponent implements OnInit {
  postsArray!: Array<any>;
  categoryTitle!: string;

  constructor(private router: ActivatedRoute, private postService: PostService) {
  }

  ngOnInit(): void {
    this.router.params.subscribe(val => {
      this.categoryTitle = val['category'];
      this.postService.loadCategoryPost(val['id'], 4).subscribe(data => {
        this.postsArray = data;
      })
    })
  }

}

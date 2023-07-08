import {Component, OnInit} from '@angular/core';
import {PostService} from "../../services/post.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  featurePosts!: Array<any>;
  latestPosts!: Array<any>;

  constructor(private postService: PostService) {

  }

  ngOnInit(): void {
    this.postService.loadFeatures().subscribe(val => {
      this.featurePosts = val;
    })
    this.postService.loadLatest().subscribe(val =>
      this.latestPosts = val
    )
  }

}

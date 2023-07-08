import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AngularFireModule} from "@angular/fire/compat";
import {AngularFirestoreModule} from "@angular/fire/compat/firestore";

import {AppComponent} from './app.component';
import {HeaderComponent} from './layouts/header/header.component';
import {CategoryNavbarComponent} from './layouts/category-navbar/category-navbar.component';
import {FooterComponent} from './layouts/footer/footer.component';
import {HomeComponent} from './pages/home/home.component';
import {SingleCategoryComponent} from './pages/single-category/single-category.component';
import {SinglePostComponent} from './pages/single-post/single-post.component';
import {TermsAndConditionsComponent} from './pages/terms-and-conditions/terms-and-conditions.component';
import {ContactUsComponent} from './pages/contact-us/contact-us.component';
import {AboutUsComponent} from './pages/about-us/about-us.component';
import {SubscriptionFormComponent} from './subscription-form/subscription-form.component';
import {CommentFormComponent} from './comments/comment-form/comment-form.component';
import {CommentListComponent} from './comments/comment-list/comment-list.component';
import {AppRoutingModule} from './app-routing.module';
import {PostCardComponent} from './layouts/post-card/post-card.component';
import {ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CategoryNavbarComponent,
    FooterComponent,
    HomeComponent,
    SingleCategoryComponent,
    SinglePostComponent,
    TermsAndConditionsComponent,
    ContactUsComponent,
    AboutUsComponent,
    SubscriptionFormComponent,
    CommentFormComponent,
    CommentListComponent,
    PostCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CommonModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyAXz4Q-epH7-trUh1WsBQxi4bVHuKHNFDs",
      authDomain: "blogapp-af815.firebaseapp.com",
      projectId: "blogapp-af815",
      storageBucket: "blogapp-af815.appspot.com",
      messagingSenderId: "122600767669",
      appId: "1:122600767669:web:5e088a8731f440d3ed3efc",
      measurementId: "G-ME61SN06QG"
    }),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {Art, State} from '../../NgRx/app-interfaces';
import {Router} from '@angular/router';

@Component({
  selector: 'app-blog-posts',
  templateUrl: './blog-posts.component.html',
  styleUrls: ['./blog-posts.component.scss']
})
export class BlogPostsComponent implements OnInit {
  color: {name: string, value: string};
  arts: Art[];
  tempContent = 'Lorem ipsum dolor sit amet consectetur adipiscing elit, ' +
    'urna consequat felis vehicula class Phasellus ante pellentesque erat cum r';
  constructor(private store: Store<State>, private router: Router) { }

  ngOnInit() {
    this.store.select('AppState').subscribe(
      (data) => {
        this.color = data.color;
        this.arts = data.arts;
      }
    );
  }
  navigate(index: number) {
    this.router.navigate(['blog', index]);
  }
}

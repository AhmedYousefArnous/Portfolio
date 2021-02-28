import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {Art, State} from '../../NgRx/app-interfaces';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss']
})
export class BlogPostComponent implements OnInit {
  color: {name: string, value: string};
  art: Art;
  index: number;
  tempContent = 'Lorem ipsum dolor sit amet consectetur adipiscing elit, urna consequat felis vehicula class' +
    ' ultricies mollis dictumst, aenean non a in donec nulla. Phasellus ante pellentesque erat cum r' +
    ' ultricies mollis dictumst, aenean non a in donec nulla. Phasellus ante pellentesque erat cum r' +
    ' ultricies mollis dictumst, aenean non a in donec nulla. Phasellus ante pellentesque erat cum r' +
    ' ultricies mollis dictumst, aenean non a in donec nulla. Phasellus ante pellentesque erat cum r' +
    ' ultricies mollis dictumst, aenean non a in donec nulla. Phasellus ante pellentesque erat cum r' +
    ' ultricies mollis dictumst, aenean non a in donec nulla. Phasellus ante pellentesque erat cum r' +
    ' ultricies mollis dictumst, aenean non a in donec nulla. Phasellus ante pellentesque erat cum r' +
    ' ultricies mollis dictumst, aenean non a in donec nulla. Phasellus ante pellentesque erat cum r' +
    ' ultricies mollis dictumst, aenean non a in donec nulla. Phasellus ante pellentesque erat cum r' +
    ' ultricies mollis dictumst, aenean non a in donec nulla. Phasellus ante pellentesque erat cum r' +
    ' ultricies mollis dictumst, aenean non a in donec nulla. Phasellus ante pellentesque erat cum r' +
    ' ultricies mollis dictumst, aenean non a in donec nulla. Phasellus ante pellentesque erat cum r' +
    ' ultricies mollis dictumst, aenean non a in donec nulla. Phasellus ante pellentesque erat cum r' +
    ' ultricies mollis dictumst, aenean non a in donec nulla. Phasellus ante pellentesque erat cum r' +
    ' ultricies mollis dictumst, aenean non a in donec nulla. Phasellus ante pellentesque erat cum r' +
    ' ultricies mollis dictumst, aenean non a in donec nulla. Phasellus ante pellentesque erat cum r' +
    ' ultricies mollis dictumst, aenean non a in donec nulla. Phasellus ante pellentesque erat cum r' +
    ' ultricies mollis dictumst, aenean non a in donec nulla. Phasellus ante pellentesque erat cum r' +
    ' ultricies mollis dictumst, aenean non a in donec nulla. Phasellus ante pellentesque erat cum r' +
    ' ultricies mollis dictumst, aenean non a in donec nulla. Phasellus ante pellentesque erat cum r' +
    ' ultricies mollis dictumst, aenean non a in donec nulla. Phasellus ante pellentesque erat cum r' +
    ' ultricies mollis dictumst, aenean non a in donec nulla. Phasellus ante pellentesque erat cum r' +
    ' ultricies mollis dictumst, aenean non a in donec nulla. Phasellus ante pellentesque erat cum r' +
    ' ultricies mollis dictumst, aenean non a in donec nulla. Phasellus ante pellentesque erat cum r' +
    ' ultricies mollis dictumst, aenean non a in donec nulla. Phasellus ante pellentesque erat cum r' +
    ' ultricies mollis dictumst, aenean non a in donec nulla. Phasellus ante pellentesque erat cum r' +
    ' ultricies mollis dictumst, aenean non a in donec nulla. Phasellus ante pellentesque erat cum r' +
    ' ultricies mollis dictumst, aenean non a in donec nulla. Phasellus ante pellentesque erat cum r';
  constructor(private store: Store<State>, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      data => this.index = data.index
    );
    this.store.select('AppState').subscribe(
      (data) => {
        this.color = data.color;
        this.art = data.arts[this.index];
      }
    );
  }

}

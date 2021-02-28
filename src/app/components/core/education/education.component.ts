import { Component, OnInit } from '@angular/core';
import { State} from '../NgRx/app-interfaces';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  color: {name: string, value: string};
  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.store.select('AppState').subscribe(
      (data) => {
        this.color = data.color;
      }
    );
  }
}

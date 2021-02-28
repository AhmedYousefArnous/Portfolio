import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {State, Testim} from '../NgRx/app-interfaces';

@Component({
  selector: 'app-testims',
  templateUrl: './testims.component.html',
  styleUrls: ['./testims.component.scss']
})
export class TestimsComponent implements OnInit {

  color: {name: string, value: string};
  testims: Testim[];
  tempContent = 'Lorem ipsum dolor sit amet cois dictumst, aenean non a in donec nulla.' +
    ' Phasellus ante pellentesque erat cum risus consequat imp';
  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.store.select('AppState').subscribe(
      (data) => {
        this.color = data.color;
        this.testims = data.testims;
      }
    );
  }
}

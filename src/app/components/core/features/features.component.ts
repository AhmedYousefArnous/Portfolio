import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {Feature, State} from '../NgRx/app-interfaces';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {
  color: {name: string, value: string};
  features: Feature[];
  tempDesc = 'Lorem ipsum dolor sit amet cois dictumst, aenean non a in donec nulla.' +
    ' Phasellus ante pellentesque erat cum risus consequat imp';
  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.store.select('AppState').subscribe(
      (data) => {
        this.color = data.color;
        this.features = data.features;
      }
    );
  }
}

import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {State} from '../core/NgRx/app-interfaces';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

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

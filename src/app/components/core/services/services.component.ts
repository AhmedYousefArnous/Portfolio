import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {Service, State} from '../NgRx/app-interfaces';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  color: {name: string, value: string};
  services: Service[];
  tempDesc = 'Lorem ipsum dolor sit amet cois dictumst, aenean non a in donec nulla.' +
    ' Phasellus ante pellentesque erat cum risus consequat imp';
  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.store.select('AppState').subscribe(
      (data) => {
        this.color = data.color;
        this.services = data.services;
      }
    );
  }

}

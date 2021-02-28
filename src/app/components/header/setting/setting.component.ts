import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {Color, State} from '../../core/NgRx/app-interfaces';
import {Store} from '@ngrx/store';
import * as AppActionsList from '../../core/NgRx/app-actions';
@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss'],
  animations: [
    trigger( 'settingAnimation', [
      state( 'no', style ({
        left: '-142px'
      })),
      state( 'yes', style({
        left: '0'
      })),
      transition('yes <=> no', animate(500))
    ])
  ]
})
export class SettingComponent implements OnInit {
  animated = 'no';
  colors: Color[] = [
    {name: 'nile', value: '#008eff' },
    {name: 'green', value: '#4aff0c' },
    {name: 'green-dark', value: '#08dd08' },
    {name: 'red', value: '#ff2828' },
    {name: 'purple', value: '#ab09ed' },
    {name: 'orange', value: '#ff7900' },
    {name: 'orange-dark', value: '#ff4000' },
    {name: 'pink', value: '#ff00c2' },
    {name: 'rose', value: '#e91e63' },
  ];
  constructor(private store: Store<State>) { }

  ngOnInit() {
  }
  animateSetting () {
    if (this.animated === 'yes') {
      this.animated = 'no';
    } else {
      this.animated = 'yes';
    }
  }
  changeTheme(color: Color) {
    this.store.dispatch(new AppActionsList.ChangeTheme(color));
  }
}

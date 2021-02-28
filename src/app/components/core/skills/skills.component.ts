import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {State, Skill } from '../NgRx/app-interfaces';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit {
  frontEndSkills: Skill[];
  backEndSkills: Skill[];
  generalSkills: string[];
  color: {name: string, value: string};
  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.store.select('AppState').subscribe(
      (data) => {
        this.frontEndSkills = data.skills.frontEnd;
        this.backEndSkills = data.skills.backEnd;
        this.generalSkills = data.skills.general;
        this.color = data.color;
      }
    );
  }

}

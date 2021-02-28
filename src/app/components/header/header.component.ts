import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  sections = [
    '',
    'Features',
    'Skills',
    'Education',
    'Blog',
    'Services',
    'Testims',
    'Contact'
  ]
  ngOnInit() {
  }

}

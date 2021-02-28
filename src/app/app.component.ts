import {Component, HostListener, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  @HostListener('window:scroll') onWindowScroll () {
    // console.log(window.pageYOffset);
    // console.
}
  // constructor (private document: Document) {}

  ngOnInit() {
    // const nuber = this.document.getElementById('')
  }
}

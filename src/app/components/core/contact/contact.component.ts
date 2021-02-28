import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {Store} from '@ngrx/store';
import {State} from '../NgRx/app-interfaces';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations: [
    trigger('labelAnimate', [
      state('normal', style({
        top: '40px',
        left: '20px',
        color: '#848484'
      })),
      state('animated', style({
        top: '0px',
        left: '10px',
        color: '#FFF'
      })),
      transition('normal => animated', animate(300))
    ]),
    trigger( 'spanAnimate1', [
      state( 'normal', style({
        left: '50%',
        width: '0'
      })),
      state( 'animated', style({
        left: '0',
        width: '50%'
      })),
      transition('normal <=> animated', animate(250))
    ]),
    trigger( 'spanAnimate2', [
      state( 'normal', style({
        left: '49%',
        width: '0',
        bottom: '5px'

      })),
      state( 'animated', style({
        left: '49%',
        width: '51%',
        bottom: '5px'
      })),
      transition('normal <=> animated', animate(250))
    ])

  ]
})
export class ContactComponent implements OnInit {
  /*Animation variables*/
  state = 'normal';
  state2 = 'normal';
  state3 = 'normal';
  spanState = 'normal';
  /* Color */
  color: {name: string, value: string};
  /*Form*/
  contactForm: FormGroup;
  msg: string = null;
  constructor(private store: Store<State>, private http: HttpClient) { }

  ngOnInit() {
    this.store.select('AppState').subscribe(
      (data) => {
        this.color = data.color;
      }
    );
    this.contactForm = new FormGroup({
      'name': new FormControl(null, [Validators.required]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'message': new FormControl(null, Validators.required)
    });
  }
  focusLabel(number: number) {
    switch (number) {
      case 1:
        this.state = 'animated';
        break;
      case 2:
        this.state2 = 'animated';
        break;
    }
  }
  focusTextArea() {
    this.spanState = 'animated';
    this.state3 = 'animated';
  }
  onSubmit() {
    this.http.post('assets/backend/mail.php', this.contactForm.value).subscribe(
    // this.http.post('http://localhost/ws/Mail/script.php', this.contactForm.value).subscribe(
      (data) => {
        if (data === 'Sent') {
          this.msg = 'Your Message Was Sent' ;
        } else {
          this.msg = 'Error Occurs' ;
        }
      }
    );
    this.contactForm.reset();
  }
}

import {Directive, ElementRef, OnInit, Renderer2} from '@angular/core';
import {Store} from '@ngrx/store';
import {State} from '../../components/core/NgRx/app-interfaces';

@Directive({
  selector: '[appThemeColoring]'
})
export class ThemeColoringDirective implements OnInit{

  constructor(private element: ElementRef,
              private store: Store<State>,
              private render: Renderer2) { }
  ngOnInit() {
    this.store.select('AppState').subscribe(
      (data) => {
        this.element.nativeElement.style.setProperty('--color', data.color.value);
      }
    );
  }
}

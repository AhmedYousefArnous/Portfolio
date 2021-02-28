import * as AppActionsList from './app-actions';
import {State} from './app-interfaces';

const initialState: State = {
  skills:
    {
      frontEnd: [
        {name: 'HTML/HTML5', desc: 'HyperText Markup Language', show: false},
        {name: 'CSS/CSS3', desc: 'Cascading Style Sheets', show: false},
        {name: 'JavaScript', desc: 'Client Side Programming Language', show: false},
        {name: 'Pug', desc: 'HTML Preprocessor', show: false},
        {name: 'SASS', desc: 'CSS Preprocessor', show: false},
        {name: 'Bootstrap 4', desc: 'HTML/CSS Framework', show: false},
        {name: 'TypeScript', desc: 'JavaScript Preprocessor', show: false},
        {name: 'EcmaJs', desc: 'JavaScript Preprocessor', show: false},
        {name: 'Angular', desc: 'JavaScript Framework', show: false},
        {name: 'NgRx', desc: 'JavaScript Library', show: false},
        {name: 'jQuery', desc: 'JavaScript Library', show: false},
        {name: 'Json', desc: 'JavaScript Technology', show: false},
        {name: 'Ajax', desc: 'Asynchronous JavaScript and XML', show: false},
      ],
      backEnd: [
        {name: 'PHP5', desc: 'BackEnd Programming Language', show: false},
        {name: 'OOP & MVC', desc: null, show: false},
        {name: 'Laravel', desc: 'PHP Framework', show: false},
        {name: 'MySQL', desc: 'Database administration', show: false},
        {name: 'Python', desc: 'BackEnd Programming Language', show: false}
      ],
      general: [
        'Problem Solving',
        'Fluent in Linux and Operating environments',
        'Git / Subversion toolset',
        'Java Programming',
        'XML',
        'C/C++ Programming',
        'VB.NET Programming',
        'Wireframing & Prototyping'
      ]
    },
  arts: [
    {name: 'Article Name 1', desc: '', imgPath: 'assets/img/1.jpeg', date: '20 Nov, 2017'},
    {name: 'Article Name 2', desc: '', imgPath: 'assets/img/2.jpeg', date: '20 Nov, 2017'},
    {name: 'Article Name 3', desc: '', imgPath: 'assets/img/3.jpg', date: '20 Nov, 2017'}
  ],
  color: {
    name: 'nile',
    value: '#008eff'
  },
  features: [
    {name: 'Code valid', desc: '', icon: 'fa-check'},
    {name: 'Responsive Layout', desc: '', icon: 'fa-mobile'},
    {name: 'creativity', desc: '', icon: 'fa-creative-commons'},
    {name: 'Easy To Custumize', desc: '', icon: 'fa-code'},
    {name: 'Thoughful Design', desc: '', icon: 'fa-flash'},
    {name: 'Well Documented', desc: '', icon: 'fa-code-fork'},
  ],
  services: [
    {name: 'Design', desc: '', icon: 'fa-paint-brush'},
    {name: 'Develop', desc: '', icon: 'fa-wrench'},
    {name: 'Regular Support', desc: '', icon: 'fa-handshake-o'}
  ],
  testims: [
    {imgPath: 'assets/img/avatars/1.png', name: 'John Doe', content: ''},
    {imgPath: 'assets/img/avatars/2.jpg', name: 'Max wailly', content: ''},
    {imgPath: 'assets/img/avatars/3.jpg', name: 'Mary Gen', content: ''}
  ],

};

export function AppReducer (state = initialState, action: AppActionsList.AppActions) {
  switch (action.type) {
    case AppActionsList.CHANGE_THEME:
      return {
        ...state,
        color: action.payload
      };
    default:
      return state;

  }
}

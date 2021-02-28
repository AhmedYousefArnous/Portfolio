export interface Skill {
  name: string;
  desc: string;
  show: Boolean;
}
export interface Skills {
  frontEnd: Skill[];
  backEnd: Skill[];
  general: string[];
}
export interface Color {
  name: string;
  value: string;
}
export interface Art {
  name: string;
  desc: string;
  imgPath: string;
  date: string;
}
export interface Feature {
  name: string;
  desc: string;
  icon: string;
}
export interface Service {
  name: string;
  desc: string;
  icon: string;
}
export interface Testim {
  imgPath: string;
  name: string;
  content: string;
}
export interface State {
  skills: Skills;
  arts: Art[];
  color: Color;
  features: Feature[];
  services: Service[];
  testims: Testim[];
}

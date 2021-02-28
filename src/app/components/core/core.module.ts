import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PersonalComponent} from './personal/personal.component';
import {FeaturesComponent} from './features/features.component';
import {SkillsComponent} from './skills/skills.component';
import {EducationComponent} from './education/education.component';
import {BlogComponent} from './blog/blog.component';
import {ServicesComponent} from './services/services.component';
import {TestimsComponent} from './testims/testims.component';
import {ContactComponent} from './contact/contact.component';
import {CoreRoutingModule} from './core.routing.module';
import {HomeComponent} from './home/home.component';

import {HoverColoringDirective} from '../../FrameWork/Directives/hover-coloring.directive';
import {AppReducer} from './NgRx/app-reducers';
import {StoreModule} from '@ngrx/store';
import {ThemeColoringDirective} from '../../FrameWork/Directives/theme-coloring.directive';
import {BlogPostComponent} from './blog/blog-post/blog-post.component';
import {BlogPostsComponent} from './blog/blog-posts/blog-posts.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    SkillsComponent,
    HomeComponent,
    PersonalComponent,
    FeaturesComponent,
    EducationComponent,
    BlogComponent,
    BlogPostsComponent,
    BlogPostComponent,
    ServicesComponent,
    TestimsComponent,
    ContactComponent,
    HoverColoringDirective,
    ThemeColoringDirective,

  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    ReactiveFormsModule

  ],
  exports: [
    CoreRoutingModule,
    HoverColoringDirective,
    ThemeColoringDirective
  ]
})
export class CoreModule {
}

import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FeaturesComponent} from './features/features.component';
import {HomeComponent} from './home/home.component';
import {SkillsComponent} from './skills/skills.component';
import {EducationComponent} from './education/education.component';
import {BlogComponent} from './blog/blog.component';
import {ServicesComponent} from './services/services.component';
import {TestimsComponent} from './testims/testims.component';
import {ContactComponent} from './contact/contact.component';
import {BlogPostComponent} from './blog/blog-post/blog-post.component';
import {BlogPostsComponent} from './blog/blog-posts/blog-posts.component';

const routes: Routes = [
        {path: '', component: HomeComponent},
        {path: 'features', component: FeaturesComponent},
        {path: 'skills', component: SkillsComponent},
        {path: 'education', component: EducationComponent},
        {path: 'blog', component: BlogComponent, children: [
            {path: '', component: BlogPostsComponent },
            {path: ':index', component: BlogPostComponent }
          ]},
        {path: 'services', component: ServicesComponent},
        {path: 'testims', component: TestimsComponent},
        {path: 'contact', component: ContactComponent},
  ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class CoreRoutingModule {}

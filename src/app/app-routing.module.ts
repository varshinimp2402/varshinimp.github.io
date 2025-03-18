import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './components/default/default.component';
import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { NewsComponent } from './pages/news/news.component';
import { ContactComponent } from './pages/contact/contact.component';
import { SkillsComponent } from './pages/skills/skills.component';

const routes: Routes = [
  { path: '', component: DefaultComponent},
  { path: 'about', component: HomeComponent },
  { path: 'projects', component: ProjectsComponent},
  { path: 'news', component: NewsComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'skills', component: SkillsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

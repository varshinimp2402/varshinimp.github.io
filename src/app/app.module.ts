import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { NewsComponent } from './pages/news/news.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ContactComponent } from './pages/contact/contact.component';
import { DefaultComponent } from './components/default/default.component';
import { SkillsComponent } from './pages/skills/skills.component';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    NavbarComponent,
    HomeComponent,
    NewsComponent,
    ProjectsComponent,
    ContactComponent,
    DefaultComponent,
    SkillsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

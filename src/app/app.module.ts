
import { NgxParticlesModule } from "@tsparticles/angular";
import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { SkillBoxComponent } from './skill-box/skill-box.component';
import { ButtonComponent } from './button/button.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectBoxComponent } from './project-box/project-box.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectModalComponent } from './project-modal/project-modal.component';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    AboutComponent,
    SkillsComponent,
    SkillBoxComponent,
    ButtonComponent,
    ProjectsComponent,
    ProjectBoxComponent,
    FooterComponent,
    ContactComponent,
    ProjectModalComponent,

   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgxParticlesModule, FormsModule,HttpClientModule, ReactiveFormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

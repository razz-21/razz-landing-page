import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MainPageComponent } from "./main-page/main-page.component";
import { NavbarComponent } from "./main-page/components/navbar/navbar.component";
import { HeaderContentComponent } from "./main-page/components/header-content/header-content.component";
import { AboutMeComponent } from "./main-page/components/about-me/about-me.component";
import { ServicesComponent } from "./main-page/components/services/services.component";
import { EducationAndWorkComponent } from "./main-page/components/education-and-work/education-and-work.component";
import { TechsAndToolsComponent } from "./main-page/components/techs-and-tools/techs-and-tools.component";
import { ProjectsComponent } from "./main-page/components/projects/projects.component";
import { ContactMeComponent } from "./main-page/components/contact-me/contact-me.component";
import { FooterComponent } from './main-page/components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    NavbarComponent,
    HeaderContentComponent,
    AboutMeComponent,
    ServicesComponent,
    EducationAndWorkComponent,
    TechsAndToolsComponent,
    ProjectsComponent,
    ContactMeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

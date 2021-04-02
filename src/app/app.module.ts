import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MainPageComponent } from "./main-page/main-page.component";
import { NavbarComponent } from "./main-page/components/navbar/navbar.component";
import { HeaderContentComponent } from "./main-page/components/header-content/header-content.component";
import { AboutMeComponent } from "./main-page/components/about-me/about-me.component";

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    NavbarComponent,
    HeaderContentComponent,
    AboutMeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

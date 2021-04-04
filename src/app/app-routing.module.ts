import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// Components
import { MainPageComponent } from "./main-page/main-page.component";

const routes: Routes = [
  { path: "", component: MainPageComponent},
  { path: "**", redirectTo: "/" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: "enabled" })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

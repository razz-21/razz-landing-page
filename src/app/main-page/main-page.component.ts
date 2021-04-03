import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-main-page",
  templateUrl: "./main-page.component.html",
  styleUrls: ["./main-page.component.scss"]
})
export class MainPageComponent implements OnInit {

  currentSection: string;

  constructor() {
    this.currentSection = "section1";
  }

  ngOnInit(): void {
  }

  onSectionChange(section: string): void {
    this.currentSection = section;
  }

}

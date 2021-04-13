import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-header-content",
  templateUrl: "./header-content.component.html",
  styleUrls: ["./header-content.component.scss"]
})
export class HeaderContentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  scrollToAbout(): void {
    const scrollHeight = document.querySelector("#section2")?.getBoundingClientRect().top || 0;
    scrollBy(
      {
        top: scrollHeight - 76,
        behavior: "smooth"
      }
    );
  }

  downloadCV(): void {
    const link = document.createElement("a");
    link.setAttribute("type", "hidden");
    link.href = "../../../../assets/Ernesto Razo - CV.pdf";
    link.download = "Ernesto Razo - CV";
    document.body.appendChild(link);
    link.click();
    link.remove();
  }

}

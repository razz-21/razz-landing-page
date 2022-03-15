import { Component, OnInit, ViewEncapsulation } from "@angular/core";

import SwiperCore, {
  Pagination,
  EffectFade,
  Autoplay
} from "swiper";

// install Swiper modules
SwiperCore.use([Autoplay, EffectFade, Pagination]);

@Component({
  selector: "app-header-content",
  templateUrl: "./header-content.component.html",
  styleUrls: ["./header-content.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class HeaderContentComponent implements OnInit {

  index = 1;

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

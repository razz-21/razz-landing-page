import { Component, OnInit } from "@angular/core";
import { SwiperOptions } from "swiper";

@Component({
  selector: "app-header-content",
  templateUrl: "./header-content.component.html",
  styleUrls: ["./header-content.component.scss"]
})
export class HeaderContentComponent implements OnInit {

  config: SwiperOptions = {
    cssMode: true,
    speed: 500,
    autoplay: {
      delay: 5000
    },
    slidesPerView: "auto",
    fadeEffect: { crossFade: true },
    centeredSlides: true,
    effect: "fade",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  };
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

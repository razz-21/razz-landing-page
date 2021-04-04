import { Component, HostListener, OnInit } from "@angular/core";

@Component({
  selector: "app-back-to-top",
  templateUrl: "./back-to-top.component.html",
  styleUrls: ["./back-to-top.component.scss"]
})
export class BackToTopComponent implements OnInit {

  scrollBtn!: HTMLElement;

  constructor() { }

  ngOnInit(): void {
    this.scrollBtn = (document.getElementById("scroll-btn") as HTMLElement);
  }

  @HostListener("window:scroll") scrollToTopHandler(): void {
    this.handleScroll();
  }

  handleScroll(): void {
    const scrollY = window.scrollY;
    const offset = 555;

    // hide scroll-to-top button
    this.scrollBtn.classList.remove("scrollBtnEnter");
    this.scrollBtn.classList.add("scrollBtnExit");

    if (scrollY >= offset) {

      // show scroll-to-top button
      this.scrollBtn.style.display = "flex";
      this.scrollBtn.classList.remove("scrollBtnExit");
      this.scrollBtn.classList.add("scrollBtnEnter");
    }
  }

  scrollToTop(): void {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  }

}

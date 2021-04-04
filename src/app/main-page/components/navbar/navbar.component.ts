import { AfterViewInit, Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from "@angular/core";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements OnInit, AfterViewInit {

  @ViewChild("navSideBar") navSideBar!: ElementRef;
  @Input() currentSection: string;

  navSideBarEl!: HTMLElement;

  constructor(
    private renderer: Renderer2
  ) {
    this.currentSection = "section1";
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.navSideBarEl = this.navSideBar.nativeElement;
  }

  scrollTo(section: string): void {
    const scrollHeight = document.querySelector("#" + section)?.getBoundingClientRect().top || 0;
    scrollBy(
      {
        top: scrollHeight - 76,
        behavior: "smooth"
      }
    );
  }

  scrollToMobile(section: string): void {
    const scrollHeight = document.querySelector("#" + section)?.getBoundingClientRect().top || 0;
    scrollBy(
      {
        top: scrollHeight - 76,
        behavior: "smooth"
      }
    );

    this.toggleSidebar();
  }

  toggleSidebar(): void {
    const isActive = this.navSideBarEl.classList.contains("active");

    if (!isActive) {
      this.renderer.addClass(this.navSideBarEl, "sliding-right");
      this.renderer.setStyle(document.body, "overflow", "hidden");
      setTimeout(() => {
        this.renderer.addClass(this.navSideBarEl, "active");
        this.renderer.removeClass(this.navSideBarEl, "sliding-right");
      }, 300);
    } else {
      this.renderer.addClass(this.navSideBarEl, "sliding-left");
      this.renderer.setStyle(document.body, "overflow", "auto");
      setTimeout(() => {
        this.renderer.removeClass(this.navSideBarEl, "active");
        this.renderer.removeClass(this.navSideBarEl, "sliding-left");
      }, 300);
    }
  }

}

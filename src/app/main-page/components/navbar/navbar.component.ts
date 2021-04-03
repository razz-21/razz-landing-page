import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from "@angular/core";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements OnInit, AfterViewInit {

  @ViewChild("navSideBar") navSideBar!: ElementRef;

  navSideBarEl!: HTMLElement;

  constructor(
    private renderer: Renderer2
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.navSideBarEl = this.navSideBar.nativeElement;
  }

  toggleSidebar(): void {
    const isActive = this.navSideBarEl.classList.contains("active");

    !isActive
      ? this.renderer.addClass(this.navSideBarEl, "active")
      : this.renderer.removeClass(this.navSideBarEl, "active");
  }

}

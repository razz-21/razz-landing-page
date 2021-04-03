import { Directive, ElementRef, EventEmitter, HostListener, Input, Output } from "@angular/core";

@Directive({
  selector: "[appScrollspy]"
})
export class ScrollspyDirective {

  @Input() spiedTags: string[];
  @Output() sectionChange = new EventEmitter<string>();

  currentSection: string;

  constructor(
    private el: ElementRef
  ) {
    this.spiedTags = [];
    this.currentSection = "section1";
  }

  @HostListener("document:scroll", ["$event"]) onScroll(event: Event): void {
    let currentSection!: string;
    const children = this.el.nativeElement.children;
    const scrollTop = window.scrollY;
    const parentOffset = window.pageYOffset;
    for (const element of children) {
      if (this.spiedTags.some(spiedTag => spiedTag === element.tagName)) {
        if ((element.offsetTop - 77) <= scrollTop) {
          currentSection = element.id;
        }

        if (Math.ceil(scrollTop) >= (document.body.offsetHeight - window.innerHeight)) {
          currentSection = "section5";
        }
      }
    }
    if (currentSection !== this.currentSection) {
      this.currentSection = currentSection;
      this.sectionChange.emit(this.currentSection);
    }
  }

}

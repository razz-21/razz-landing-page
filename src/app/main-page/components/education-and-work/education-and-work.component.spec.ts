import { ComponentFixture, TestBed } from "@angular/core/testing";

import { EducationAndWorkComponent } from "./education-and-work.component";

describe("EducationAndWorkComponent", () => {
  let component: EducationAndWorkComponent;
  let fixture: ComponentFixture<EducationAndWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducationAndWorkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EducationAndWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});

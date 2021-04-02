import { ComponentFixture, TestBed } from "@angular/core/testing";

import { TechsAndToolsComponent } from "./techs-and-tools.component";

describe("TechsAndToolsComponent", () => {
  let component: TechsAndToolsComponent;
  let fixture: ComponentFixture<TechsAndToolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechsAndToolsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechsAndToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});

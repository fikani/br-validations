import {
  Directive,
  Input,
  AfterViewInit,
  OnDestroy,
  ElementRef
} from "@angular/core";
import { Utils } from "./utils";

@Directive({ selector: "[toggle-pwd]" })
export class TogglePasswordDirective implements AfterViewInit, OnDestroy {
  @Input("toggle-pwd") pwdInputName: string;
  private target: HTMLInputElement;
  constructor(private el: ElementRef) {}
  ngAfterViewInit(): void {
    if (this.pwdInputName) {
      this.target = <HTMLInputElement>Utils.getElement(
        this.pwdInputName,
        this.el.nativeElement
      );
    }
    if (this.target) {
      this.el.nativeElement.addEventListener("mousedown", this.showPasswd);
      this.el.nativeElement.addEventListener("touchstart", this.showPasswd);
      this.el.nativeElement.addEventListener("mouseup", this.hidePasswd);
      this.el.nativeElement.addEventListener("mouseout", this.hidePasswd);
      this.el.nativeElement.addEventListener("touchend", this.hidePasswd);
    }
  }
  ngOnDestroy(): void {
    if (this.target) {
      this.el.nativeElement.removeEventListener("mousedown", this.showPasswd);
      this.el.nativeElement.removeEventListener("touchstart", this.showPasswd);
      this.el.nativeElement.removeEventListener("mouseup", this.hidePasswd);
      this.el.nativeElement.removeEventListener("mouseout", this.hidePasswd);
      this.el.nativeElement.removeEventListener("touchend", this.hidePasswd);
    }
  }

  showPasswd = event => {
    if (this.target) {
      this.target.type = "text";
    }
  };

  hidePasswd = event => {
    if (this.target) {
      this.target.type = "password";
    }
  };
}
